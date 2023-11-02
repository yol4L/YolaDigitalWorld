"use client";

import cx from "classnames";

const NAV_ITEMS: { id: string; name: string; path: string }[] = [
  { id: "home", name: "home", path: "/#home" },
  // { id: "profile", name: "profile", path: "/portfolio" },
  { id: "recent_work", name: "work", path: "/recent-work" },
  { id: "blog", name: "blog", path: "/blog" },
  { id: "contact", name: "contact", path: "/contact" },
];

export default function NavTabs() {
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
            <a href={path}>{name.toUpperCase()}</a>
          </span>
        );
      })}
    </div>
  );
}
