"use client";

import { MoonIcon, SunIcon } from "./font-awesome-icons";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <SunIcon className="text-yellow-300 w-5 h-5" />
      ) : (
        <MoonIcon className="text-gray-700 w-5 h-5" />
      )}
    </button>
  );
}
