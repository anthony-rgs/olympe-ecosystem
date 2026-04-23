import React from "react";

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button onClick={onToggle} aria-label="Toggle theme">
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
