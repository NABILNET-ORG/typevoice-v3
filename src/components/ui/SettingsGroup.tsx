import React from "react";

interface SettingsGroupProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export const SettingsGroup: React.FC<SettingsGroupProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="space-y-2">
      {title && (
        <div className="px-4">
          <h2 className="text-xs font-medium text-mid-gray uppercase tracking-wider">
            {title}
          </h2>
          {description && (
            <p className="text-xs text-mid-gray/80 mt-1">{description}</p>
          )}
        </div>
      )}
      <div className="rounded-lg overflow-visible border border-border bg-surface">
        <div className="divide-y divide-border">
          {children}
        </div>
      </div>
    </div>
  );
};
