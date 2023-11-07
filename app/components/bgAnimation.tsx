"use client";

import { useEffect, useRef } from "react";

const m = (a: number) => {
  return Math.pow(a, 5) / 2500;
};

export default function AnimatedBackgroundView({
  darkMode,
}: {
  darkMode: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const quantity = 40;

    if (containerRef.current) {
      const container = containerRef.current;
      if (container.children.length === 0) {
        for (let i = 0; i < quantity; i++) {
          const firefly = document.createElement("div");
          firefly.classList.add("firefly");
          firefly.style.position = "fixed";
          firefly.style.left = `${Math.random() * 100}%`;
          firefly.style.top = `${Math.random() * 100}%`;
          container.appendChild(firefly);

          // Randomise Fireflies Motion
          firefly.style.animationName = `move${i}`;
          firefly.style.setProperty(
            "--drift-duration",
            `${Math.floor(Math.random() * 10) + 8}s`
          );
          firefly.style.setProperty(
            "--flash-duration",
            `${Math.random() * 10 + 6}s`
          );
          firefly.style.setProperty("--flash-delay", `${Math.random() * 7}s`);

          // Create keyframes for random movement
          const steps = Math.floor(Math.random() * 10);
          const randomMovement = m(Math.random() * 100 - 50);
          const randomScale = Math.random() * 0.75 + 0.25;

          let keyframes = `@keyframes move${i} {`;
          for (let step = 0; step <= steps; step++) {
            keyframes += `${
              step * (100 / steps)
            }% { transform: translateX(${randomMovement}vw) translateY(${randomMovement}vh) scale(${randomScale}); }`;
          }
          keyframes += "}";

          document.styleSheets[0].insertRule(keyframes);
        }
      }

      // Check if dark mode in system is enabled
      // const darkModeMediaQuery = window.matchMedia(
      //   "(prefers-color-scheme: dark)"
      // );
      // const isDarkMode = darkModeMediaQuery.matches;

      // Check if dark mode in local storage is enabled
      const fireflies = document.querySelectorAll(
        ".firefly"
      ) as NodeListOf<HTMLDivElement>;
      fireflies.forEach((firefly) => {
        const styles: Record<string, string> = {
          "--before-bg": darkMode ? "#1e293b" : "#f8fafc",
          "--after-bg": darkMode ? "#f8fafc" : "#0ea5e9",
          "--after-shadow": darkMode ? "#fde047" : "#0ea5e9",
          "--size": darkMode ? "0.25rem" : "0.2rem",
        };
        for (const property in styles) {
          firefly.style.setProperty(property, styles[property] as string);
        }
      });
    }
  }, [darkMode]);

  return (
    <div
      ref={containerRef as React.MutableRefObject<HTMLDivElement>}
      className="w-full h-full absolute"
    >
      {/* Fireflies will be added here dynamically */}
    </div>
  );
}
