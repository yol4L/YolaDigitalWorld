import cx from "classnames";
import { useRouter } from "next/navigation";
import { MutableRefObject } from "react";

const NAV_ITEMS: { id: string; name: string; path: string }[] = [
  { id: "home", name: "home", path: "/" },
  // { id: "profile", name: "profile", path: "/portfolio" },
  { id: "recent_work", name: "work", path: "/recent-work" },
  { id: "blog", name: "blog", path: "/blog" },
  { id: "contact", name: "contact", path: "/contact" },
];

export default function NavTabs({
  mainContainerRef,
}: {
  mainContainerRef?: MutableRefObject<HTMLElement | undefined>;
}) {
  const router = useRouter();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    // Get current pathname
    const currentPath = window.location.pathname;

    // Check if the current page is the home page
    if (
      path === "/" &&
      currentPath === "/" &&
      mainContainerRef &&
      mainContainerRef.current
    ) {
      e.preventDefault();
      // Smooth scroll to the top
      mainContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Use the router to navigate for other paths
      e.preventDefault();
      router.push(path);
    }
  };

  return (
    <div className="flex items-center gap-8">
      {NAV_ITEMS.map(({ id, name, path }) => {
        return (
          <span
            key={id}
            className={cx(
              "tracking-wider hover:border-b",
              "hover:text-cerulean-500  hover:border-cerulean-500",
              "dark:hover:text-brick-300 dark:hover:border-brick-300"
            )}
          >
            <a href={path} onClick={(e) => handleClick(e, path)}>
              {name.toUpperCase()}
            </a>
          </span>
        );
      })}
    </div>
  );
}
