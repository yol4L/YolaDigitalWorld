"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import cx from "classnames";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ToggleDarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is set in local storage
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);

    // Apply dark mode class to the HTML element
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // Store the dark mode preference in local storage
    localStorage.setItem("darkMode", newDarkMode.toString());

    // Toggle the dark mode class on the HTML element
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

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
