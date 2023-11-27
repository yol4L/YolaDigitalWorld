/**
 * Smoothly scrolls the specified element or the window to a target position.
 *
 * @param target - The target element to scroll, or 'window' for the global window.
 * @param endY - The vertical position (in pixels) to scroll to.
 * @param duration - The duration (in milliseconds) over which the scroll should occur.
 */
export function smoothScrollTo(
  target: HTMLElement | Window,
  endY: number,
  duration: number
): void {
  // Type guard to check if the target is a Window or an HTMLElement
  const isWindow = target === window;

  // Start Y position depending on the target type
  const startY = isWindow
    ? window.scrollY || window.pageYOffset
    : "scrollTop" in target
    ? target.scrollTop
    : 0;
  const distanceY = endY - startY;
  console.log({ endY, startY });
  const startTime = new Date().getTime();

  const easeInOutQuad = (
    time: number,
    start: number,
    distance: number,
    duration: number
  ): number => {
    // To normalize the progress of the animation.
    time /= duration / 2;

    // The animation is in its first half - calculates a quadratic curve, which starts slow and accelerates.
    if (time < 1) return (distance / 2) * time * time + start;

    // in the second half of the animation.
    time--;
    return (-distance / 2) * (time * (time - 2) - 1) + start;
  };

  const scroll = (): void => {
    const currentTime = new Date().getTime();
    const time = Math.min(1, (currentTime - startTime) / duration);
    const newY = easeInOutQuad(time, startY, distanceY, duration);

    if (isWindow) {
      window.scrollTo(0, newY);
    } else if ("scrollTop" in target) {
      target.scrollTop = newY;
    }

    // Conditional check to continue the animation
    // if (
    //   (isWindow && window.pageYOffset !== endY) ||
    //   (!isWindow && "scrollTop" in target && target.scrollTop !== endY)
    // ) {
    //   requestAnimationFrame(scroll);
    // }

    // Adding a tolerance to prevent infinite loop
    const currentY = isWindow
      ? window.scrollY || window.pageYOffset
      : "scrollTop" in target
      ? target.scrollTop
      : 0;
    const tolerance = 1; // Pixels

    // Conditional check to continue the animation
    if (Math.abs(currentY - endY) > tolerance) {
      requestAnimationFrame(scroll);
    }
  };

  scroll();
}
