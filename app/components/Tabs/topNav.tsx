"use client";

import Link from "next/link";
import Image from "next/image";
import cx from "classnames";
import NavTabs from "./navTabs";
import DarkModeButton from "../DarkMode/darkModeButton";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import useOutsideClick from "@/app/utils/useOutsideClick";

export default function TopNavView({
  mainContainerRef,
}: {
  mainContainerRef?: MutableRefObject<HTMLElement | undefined>;
}) {
  const router = useRouter();
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Resize handler to close the menu on larger screens
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      // Tailwind 'md' breakpoint
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close it when clicking outside the drawer
  const handleCloseDrawer = (target: HTMLElement): void => {
    if (target !== toggleButtonRef.current) {
      // console.log("t", target, closeButtonRef.current);
      setIsMenuOpen(false);
    }
  };

  useOutsideClick(drawerRef, handleCloseDrawer);

  // Set directory paths
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
    <>
      <nav
        className={cx(
          "px-5 md:px-20 w-full py-3 fixed top-0 z-20 flex items-center justify-between",
          "bg-slate-50 dark:bg-slate-800",
          "transition-topNav"
        )}
      >
        {/* Brand Logo and Name */}
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

        {/* Toggle Button for smaller screens */}
        <button
          className="md:hidden"
          ref={toggleButtonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuOutlinedIcon className="pointer-events-none" />
        </button>

        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-10">
          <NavTabs
            mainContainerRef={mainContainerRef}
            setIsMenuOpen={setIsMenuOpen}
          />
          <DarkModeButton setIsMenuOpen={setIsMenuOpen} />
        </div>
      </nav>
      {/* Expanded navigation tabs for smaller screens */}
      <div
        ref={drawerRef}
        className={cx(
          "w-full px-10 py-5 fixed top-10 z-10 flex flex-col gap-4 transform",
          "bg-slate-50 bg-opacity-95 dark:bg-slate-800 dark:bg-opacity-95",
          "transition-drawer",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <NavTabs
          mainContainerRef={mainContainerRef}
          setIsMenuOpen={setIsMenuOpen}
        />
        <DarkModeButton setIsMenuOpen={setIsMenuOpen} />
      </div>
    </>
  );
}
