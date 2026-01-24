import React, { useState, useEffect } from "react";
import { getVersion } from "@tauri-apps/api/app";

import ModelSelector from "../model-selector";
import UpdateChecker from "../update-checker";

const Footer: React.FC = () => {
  const [version, setVersion] = useState("");

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const appVersion = await getVersion();
        setVersion(appVersion);
      } catch (error) {
        console.error("Failed to get app version:", error);
        setVersion("0.1.2");
      }
    };

    fetchVersion();
  }, []);

  return (
    <div className="w-full border-t border-border pt-3">
      <div className="flex justify-between items-center text-xs px-4 pb-3 text-mid-gray">
        <div className="flex items-center gap-4">
          <ModelSelector />
        </div>

        {/* Update Status */}
        <div className="flex items-center gap-1.5">
          <UpdateChecker />
          <span className="opacity-40">·</span>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <span className="opacity-70">v{version}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
