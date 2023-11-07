"use client";

import { useEffect, useState } from "react";
import cx from "classnames";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ToggleDarkModeButton({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) {
  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className={cx("relative flex justify-center items-center")}
    >
      <LightModeIcon
        className={cx(
          "absolute text-slate-100 transition-opacity duration-500 ease-linear",
          darkMode ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />
      <DarkModeIcon
        className={cx(
          "absolute transition-all duration-500 ease-linear",
          darkMode ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      />
      {/* {darkMode ? <LightModeIcon className="text-white" /> : <DarkModeIcon />} */}
    </button>
  );
}
