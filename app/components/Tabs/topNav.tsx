"use client";

import Link from "next/link";
import Image from "next/image";
import cx from "classnames";
import NavTabs from "./navTabs";
import DarkModeButton from "../DarkMode/darkModeButton";
import { MutableRefObject } from "react";
import { useRouter } from "next/navigation";

export default function TopNavView({
  mainContainerRef,
}: {
  mainContainerRef?: MutableRefObject<HTMLElement | undefined>;
}) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Get current pathname
    const currentPath = window.location.pathname;

    // Check if the current page is the home page
    if (currentPath === "/" && mainContainerRef && mainContainerRef.current) {
      e.preventDefault();
      // Smooth scroll to the top
      mainContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Use the router to navigate for other paths
      e.preventDefault();
      router.push("/");
    }
  };

  return (
    <nav
      className={cx(
        "px-20 w-full py-3 fixed top-0 z-20 flex items-center justify-between",
        "bg-slate-50 dark:bg-slate-800",
        "transition-[background-color] duration-700"
      )}
    >
      <div
        onClick={handleClick}
        className="relative flex items-center gap-2 transition-none cursor-pointer"
      >
        <Image
          src="/images/home/yola-brand-avatar.svg"
          alt="brand-avatar"
          width={30}
          height={30}
        />
        <span>Yola&apos;s World</span>
      </div>
      <div className="flex items-center gap-10">
        <NavTabs mainContainerRef={mainContainerRef} />
        <DarkModeButton />
      </div>
    </nav>
  );
}
