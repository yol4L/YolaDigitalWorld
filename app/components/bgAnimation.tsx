"use client";

import { useEffect, useRef } from "react";

// const m = (a: number) => {
//   return Math.pow(a, 3) / 2500;
// };

export default function AnimatedBackgroundView() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const quantity = 30;

    if (containerRef.current) {
      const container = containerRef.current;
      if (container.children.length > 0) {
        return;
      }

      for (let i = 0; i < quantity; i++) {
        const firefly = document.createElement("div");
        firefly.classList.add("firefly");
        firefly.style.position = "fixed";
        firefly.style.left = `${Math.random() * 100}%`;
        firefly.style.top = `${Math.random() * 100}%`;
        container.appendChild(firefly);

        // Randomise Fireflies Motion
        const rotationSpeed = Math.random() * 10 + 8;
        firefly.style.animationName = `move${i}`;

        firefly.style.setProperty("--flash-delay", `${Math.random() * 6}s`);
        firefly.style.setProperty("--flash-speed", `${rotationSpeed}s`);

        // Create keyframes for random movement
        const steps = Math.floor(Math.random() * 12) + 16;
        const randomMovement = Math.random() * 100 - 50;
        const randomScale = Math.random() * 0.75 + 0.25;

        let keyframes = `@keyframes move${i} {`;
        for (let step = 0; step <= steps; step++) {
          keyframes += `${
            step * (100 / steps)
          }% { transform: translateX(${randomMovement}vw) translateY(${randomMovement}vh) scale(${randomScale}); }`;
        }
        keyframes += "}";

        document.styleSheets[0].insertRule(keyframes);

        // Check if dark mode is enabled
        const darkModeMediaQuery = window.matchMedia(
          "(prefers-color-scheme: dark)"
        );
        if (darkModeMediaQuery.matches) {
          // Dark mode is enabled
          firefly.style.setProperty("--before-bg", "#1e293b");
          firefly.style.setProperty("--after-bg", "#f8fafc");
          firefly.style.setProperty("--after-shadow", "#fde047");
          firefly.style.setProperty("--size", "0.25rem");
          console.log("dark mode");
        } else {
          // Light mode is enabled
          // You can add specific styling or classes for light mode here
          firefly.style.setProperty("--before-bg", "#f8fafc");
          firefly.style.setProperty("--after-bg", "#60a5fa");
          firefly.style.setProperty("--after-shadow", "#60a5fa");
          firefly.style.setProperty("--size", "0.2rem");
          console.log("light mode");
        }
      }
    }
  }, []);

  return (
    <div
      ref={containerRef as React.MutableRefObject<HTMLDivElement>}
      className="w-full h-full absolute"
    >
      {/* Fireflies will be added here dynamically */}
    </div>
  );
}
