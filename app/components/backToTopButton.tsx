"use client";

import { useCallback, useEffect, useState } from "react";
import cx from "classnames";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Effectively handle scroll events with useCallback
  const handleScroll = useCallback(() => {
    // Check if the scroll position is beyond a third of the window height
    if (window.scrollY > window.innerHeight / 3) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  // Smoothly scroll to the top of the page
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Register the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Render the button with fade-in/out animation
  return (
    <button
      type="button"
      onClick={handleClick}
      className={cx(
        "w-12 h-12 fixed right-12 bottom-8 rounded-full transition-all duration-700",
        "inline-flex justify-center items-center",
        "bg-cerulean-500 dark:bg-brick-300 text-slate-100 animate-bounce",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <span className="text-center">↑</span>
    </button>
  );
}
