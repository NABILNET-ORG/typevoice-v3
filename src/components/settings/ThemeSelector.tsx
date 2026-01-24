import React from "react";
import { useTranslation } from "react-i18next";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme, Theme } from "../../hooks/useTheme";
import { SettingContainer } from "../ui/SettingContainer";

interface ThemeSelectorProps {
  grouped?: boolean;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ grouped }) => {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();

  const options: { value: Theme; icon: React.ReactNode; label: string }[] = [
    {
      value: "light",
      icon: <Sun size={14} />,
      label: t("settings.theme.light"),
    },
    {
      value: "dark",
      icon: <Moon size={14} />,
      label: t("settings.theme.dark"),
    },
    {
      value: "system",
      icon: <Monitor size={14} />,
      label: t("settings.theme.system"),
    },
  ];

  return (
    <SettingContainer
      title={t("settings.theme.title")}
      description={t("settings.theme.description")}
      grouped={grouped}
    >
      <div className="flex gap-1 bg-mid-gray/10 rounded-md p-0.5">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-all duration-150 cursor-pointer ${
              theme === option.value
                ? "bg-accent text-white shadow-sm"
                : "text-mid-gray hover:text-text"
            }`}
          >
            {option.icon}
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </SettingContainer>
  );
};
