"use client";
import cx from "classnames";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDarkMode } from "../DarkMode/darkModeContext";

export default function DarkModeButton({
  setIsMenuOpen,
}: {
  setIsMenuOpen: (isOpen: boolean) => void;
}) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      type="button"
      onClick={() => {
        toggleDarkMode();
        setIsMenuOpen(false);
      }}
      className="py-2 relative flex justify-center items-center"
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
