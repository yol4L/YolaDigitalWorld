"use client";

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

export default function SideMenuTabs() {
  return (
    <div className="grow flex flex-col justify-between items-center">
      {SIDE_MENU_ITEMS.map(({ id, name, path }) => {
        return (
          <span
            key={id}
            className="text-neutral-600 tracking-wider hover:text-cerulean-500 hover:border-b hover:border-cerulean-500"
          >
            <a href={path}>{name.toUpperCase()}</a>
          </span>
        );
      })}
    </div>
  );
}
