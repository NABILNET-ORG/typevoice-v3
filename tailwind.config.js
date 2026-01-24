/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "var(--color-text)",
        background: "var(--color-background)",
        "background-ui": "var(--color-background-ui)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        "accent-subtle": "var(--color-accent-subtle)",
        surface: "var(--color-surface)",
        "surface-hover": "var(--color-surface-hover)",
        border: "var(--color-border)",
        "mid-gray": "var(--color-mid-gray)",
        "sidebar-bg": "var(--color-sidebar-bg)",
      },
    },
  },
  plugins: [],
};
