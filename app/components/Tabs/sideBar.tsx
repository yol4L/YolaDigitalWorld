"use client";

import Image from "next/image";
import cx from "classnames";
import React, { useEffect, useState } from "react";
import {
  KeyboardArrowLeftOutlined,
  BadgeOutlined,
  AlternateEmailOutlined,
} from "@mui/icons-material";
import { SIDE_MENU_ITEMS } from "@/app/data";

const SideBar = ({
  activeSection,
  isSidebarOpen,
  onToggle,
}: {
  activeSection: string;
  isSidebarOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <aside
      className={cx(
        "h-screen sticky top-0 left-0 z-20",
        "bg-slate-200 dark:bg-slate-900 transition-all duration-700 ease-in-out",
        isSidebarOpen ? "md:w-64" : "w-20"
      )}
    >
      <button
        className={cx(
          "w-6 h-6 rounded-full inline-flex items-center justify-center",
          "bg-ocean-500 absolute bottom-10 -right-3 z-20",
          !isSidebarOpen &&
            "transform rotate-180 transition-transform duration-300 ease-in-out"
        )}
        onClick={onToggle}
      >
        <KeyboardArrowLeftOutlined className="h-4 w-4 text-slate-50" />
      </button>

      <div
        className={cx(
          "w-full h-full px-10 pt-24 pb-16 flex flex-col gap-8 items-center"
        )}
      >
        {/* Avatar */}
        <div
          className={cx(
            "relative rounded-full overflow-hidden",
            isSidebarOpen ? "w-3/4 aspect-square" : "w-10 aspect-square"
          )}
        >
          <Image
            src="/images/home/yola-avatar.jpg"
            alt="yola-avatar"
            fill
            className="object-cover"
          />
        </div>
        {/* Info */}
        {isSidebarOpen ? (
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-semibold text-2xl text-slate-800 dark:text-slate-100 transition-colors duration-700">
              Yola Liang
            </h1>
            <a
              href="mailto:yola.liang.direct@gmail.com"
              className="text-cerulean-400 hover:text-cerulean-700 dark:text-brick-400 hover:dark:text-brick-700 transition-colors duration-700"
            >
              yola.liang.direct@gmail.com
            </a>
          </div>
        ) : (
          <div
            className={cx(
              "flex flex-col justify-center items-center gap-3",
              "text-slate-400 dark:text-slate-700 transition-colors duration-700"
            )}
          >
            <div className="relative group">
              <BadgeOutlined className="hover:text-cerulean-700 hover:dark:text-brick-700" />
              <span
                className={cx(
                  "py-1 px-2 ml-2 absolute left-full whitespace-nowrap rounded shadow-md text-white text-xs bg-slate-900",
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                )}
              >
                {`Yola Liang`}
              </span>
            </div>
            <div className="relative group">
              <button
                type="button"
                className="hover:text-cerulean-700 hover:dark:text-brick-700"
              >
                <a href="mailto:yola.liang.direct@gmail.com">
                  <AlternateEmailOutlined />
                </a>
              </button>
              <span
                className={cx(
                  "py-1 px-2 ml-2 absolute left-full whitespace-nowrap rounded shadow-md text-white text-xs bg-slate-900",
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                )}
              >
                {`Send email`}
              </span>
            </div>
          </div>
        )}
        {/* Side menu */}
        <div
          className={cx(
            "grow flex flex-col justify-between items-center",
            !isSidebarOpen && "my-5"
          )}
        >
          {SIDE_MENU_ITEMS.map(({ id, name, path, icon: Icon }) => {
            const isActive = id === activeSection;
            return (
              <>
                {isSidebarOpen ? (
                  <span
                    key={id}
                    className={cx(
                      "tracking-wider hover:border-b transition-colors duration-700",
                      "hover:text-cerulean-500  hover:border-cerulean-500",
                      "dark:hover:text-brick-300 dark:hover:border-brick-300",
                      isActive
                        ? "text-cerulean-500 border-b border-cerulean-500 dark:text-brick-300 dark:border-brick-300"
                        : "text-slate-600 dark:text-slate-400"
                    )}
                  >
                    <a href={path}>{name.toUpperCase()}</a>
                  </span>
                ) : (
                  <div key={id} className="relative group">
                    <button
                      type="button"
                      className={cx(
                        "hover:border-b transition-colors duration-700",
                        "hover:text-cerulean-500  hover:border-cerulean-500",
                        "dark:hover:text-brick-300 dark:hover:border-brick-300",
                        isActive
                          ? "text-cerulean-500 border-b border-cerulean-500 dark:text-brick-300 dark:border-brick-300"
                          : "text-slate-600 dark:text-slate-400"
                      )}
                    >
                      <a href={path}>
                        <Icon />
                      </a>
                    </button>
                    <span
                      className={cx(
                        "py-1 px-2 ml-2 absolute left-full whitespace-nowrap rounded shadow-md text-white text-xs capitalize bg-slate-900",
                        "opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                      )}
                    >
                      {name}
                    </span>
                  </div>
                )}
              </>
            );
          })}
        </div>
        {/* Copyright */}
        <div>
          <p className="text-center text-sm text-slate-400 dark:text-slate-700 transition-colors duration-700">
            {isSidebarOpen
              ? "Copyright © 2023 Yola LIANG. All rights reserved."
              : "Copyright © 2023 Yola LIANG."}
          </p>
        </div>
      </div>
    </aside>
  );
};

export default function SidebarView({
  activeSection,
}: {
  activeSection: string;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  // Resize handler to close the menu on larger screens
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      // Tailwind 'md' breakpoint
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    handleResize(); // Check initially on mount

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SideBar
      activeSection={activeSection}
      isSidebarOpen={isSidebarOpen}
      onToggle={() => setSidebarOpen(!isSidebarOpen)}
    />
  );
}
