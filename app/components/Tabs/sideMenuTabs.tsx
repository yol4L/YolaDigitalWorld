"use client";

import cx from "classnames";

const SIDE_MENU_ITEMS: {
  id: string;
  name: string;
  path: string;
}[] = [
  { id: "about", name: "about", path: "#about" },
  { id: "skills", name: "skills", path: "#skills" },
  { id: "experience", name: "experience", path: "#experience" },
  { id: "project", name: "project", path: "#project" },
  { id: "blog", name: "blog", path: "#blog" },
  { id: "education", name: "education", path: "#education" },
  { id: "fun_points", name: "fun points", path: "#fun_points" },
  { id: "contact", name: "contact", path: "#contact" },
];

export default function SideMenuTabs({
  activeSection,
}: {
  activeSection: string;
}) {
  return (
    <div className="grow flex flex-col justify-between items-center">
      {SIDE_MENU_ITEMS.map(({ id, name, path }) => {
        const isActive = id === activeSection;

        return (
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
        );
      })}
    </div>
  );
}
