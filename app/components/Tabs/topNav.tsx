"use client";

import Link from "next/link";
import Image from "next/image";
import cx from "classnames";
import NavTabs from "./navTabs";
import DarkModeButton from "../DarkMode/darkModeButton";
import { MutableRefObject } from "react";

export default function TopNavView({
  mainContainerRef,
}: {
  mainContainerRef?: MutableRefObject<HTMLElement | undefined>;
}) {
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
        <NavTabs mainContainerRef={mainContainerRef} />
        <DarkModeButton />
      </div>
    </nav>
  );
}
