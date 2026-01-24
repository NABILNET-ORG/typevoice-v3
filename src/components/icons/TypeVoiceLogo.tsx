import React from "react";

const TypeVoiceLogo = ({
  width,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <div
      className={`flex items-center gap-2 ${className || ""}`}
      style={{ width: width ? `${width}px` : undefined, height: height ? `${height}px` : undefined }}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logoGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#3B9EFF" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        {/* Microphone body - filled capsule */}
        <path
          d="M42 22C42 11 50 4 60 4C70 4 78 11 78 22V58C78 69 70 76 60 76C50 76 42 69 42 58V22Z"
          fill="url(#logoGrad)"
        />
        {/* Grille lines (cutouts) */}
        <rect x="50" y="26" width="20" height="4" rx="2" fill="white" fillOpacity="0.9" />
        <rect x="50" y="36" width="20" height="4" rx="2" fill="white" fillOpacity="0.9" />
        <rect x="50" y="46" width="20" height="4" rx="2" fill="white" fillOpacity="0.9" />
        <rect x="50" y="56" width="20" height="4" rx="2" fill="white" fillOpacity="0.9" />
        {/* Holder arc */}
        <path
          d="M32 58C32 72 44 84 60 84C76 84 88 72 88 58"
          stroke="url(#logoGrad)"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        {/* Stand */}
        <line x1="60" y1="84" x2="60" y2="102" stroke="url(#logoGrad)" strokeWidth="7" strokeLinecap="round" />
        {/* Base */}
        <line x1="44" y1="102" x2="76" y2="102" stroke="url(#logoGrad)" strokeWidth="7" strokeLinecap="round" />
        {/* Cursor arrow */}
        <path
          d="M68 64L92 88L83 90L87 102L80 104L76 92L70 98Z"
          fill="#8B5CF6"
        />
        {/* Chat bubble */}
        <rect x="76" y="6" width="34" height="24" rx="6" fill="#6366F1" />
        <rect x="84" y="14" width="18" height="3" rx="1.5" fill="white" fillOpacity="0.9" />
        <rect x="84" y="21" width="12" height="3" rx="1.5" fill="white" fillOpacity="0.9" />
      </svg>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <span className="text-base font-semibold tracking-tight" style={{ color: "var(--color-text)" }}>TypeVoice</span>
    </div>
  );
};

export default TypeVoiceLogo;
