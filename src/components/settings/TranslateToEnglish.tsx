import React from "react";
import { useTranslation } from "react-i18next";
import { ToggleSwitch } from "../ui/ToggleSwitch";
import { useSettings } from "../../hooks/useSettings";
import { useModelStore } from "../../stores/modelStore";

interface TranslateToEnglishProps {
  descriptionMode?: "inline" | "tooltip";
  grouped?: boolean;
}

const FINETUNE_MODELS = ["levantine"];
const WHISPER_TRANSLATION_MODELS = ["turbo", "large", "medium", "small"];

export const TranslateToEnglish: React.FC<TranslateToEnglishProps> = React.memo(
  ({ descriptionMode = "tooltip", grouped = false }) => {
    const { t } = useTranslation();
    const { getSetting, updateSetting, isUpdating } = useSettings();
    const models = useModelStore((s) => s.models);

    const translateToEnglish = getSetting("translate_to_english") || false;
    const selectedModel = getSetting("selected_model") as string;
    const translationModelId = (getSetting("translation_model_id") as string) || "";
    const isFinetune = FINETUNE_MODELS.includes(selectedModel);

    // Get downloaded Whisper models that can translate
    const availableTranslationModels = models.filter(
      (m) =>
        WHISPER_TRANSLATION_MODELS.includes(m.id) &&
        m.is_downloaded &&
        m.engine_type === "Whisper",
    );

    return (
      <div>
        <ToggleSwitch
          checked={translateToEnglish}
          onChange={(enabled) => updateSetting("translate_to_english", enabled)}
          isUpdating={isUpdating("translate_to_english")}
          label={t("settings.advanced.translateToEnglish.label")}
          description={t("settings.advanced.translateToEnglish.description")}
          descriptionMode={descriptionMode}
          grouped={grouped}
        />
        {translateToEnglish && isFinetune && (
          <div className="mt-2 ml-4">
            <label className="block text-xs text-mid-gray mb-1">
              {t(
                "settings.advanced.translateToEnglish.translationModel",
                "Translation Model",
              )}
            </label>
            <select
              className="w-full rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-text"
              value={translationModelId}
              onChange={(e) =>
                updateSetting("translation_model_id", e.target.value || null)
              }
            >
              <option value="">
                {t(
                  "settings.advanced.translateToEnglish.autoSelect",
                  "Auto (best available)",
                )}
              </option>
              {availableTranslationModels.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
            {availableTranslationModels.length === 0 && (
              <p className="mt-1 text-xs text-red-400">
                {t(
                  "settings.advanced.translateToEnglish.noModels",
                  "No Whisper models downloaded. Download one (e.g. Turbo) for translation.",
                )}
              </p>
            )}
          </div>
        )}
      </div>
    );
  },
);
