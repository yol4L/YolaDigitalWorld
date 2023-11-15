"use client";

import Link from "next/link";
import Image from "next/image";
import NavTabs from "./Tabs/navTabs";
import cx from "classnames";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDarkMode } from "./darkModeContext";

export default function TopNavView() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav
      className={cx(
        "px-20 w-full py-3 fixed top-0 z-20 flex items-center justify-between",
        "bg-slate-50 dark:bg-slate-800",
        "transition-[background-color] duration-700"
      )}
    >
      <Link
        href={"/"}
        className="relative flex items-center gap-2 transition-none"
      >
        <Image
          src="/yola-brand-avatar.svg"
          alt="brand-avatar"
          width={30}
          height={30}
        />
        <span>Yola&apos;s World</span>
      </Link>
      <div className="flex items-center gap-10">
        <NavTabs />
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
      </div>
    </nav>
  );
}
