"use client";

const NAV_ITEMS: { id: string; name: string; path: string }[] = [
  { id: "home", name: "home", path: "/" },
  { id: "profile", name: "profile", path: "/portfolio" },
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
            className="tracking-wider text-neutral-800 hover:text-cerulean-500 hover:border-b hover:border-cerulean-500"
          >
            <a href={path}>{name.toUpperCase()}</a>
          </span>
        );
      })}
    </div>
  );
}
