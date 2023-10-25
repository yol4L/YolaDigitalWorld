"use client";

export default function SideMenuTabs() {
  return (
    <div className="grow flex flex-col justify-between items-center">
      <span className="text-cerulean-500 tracking-wider border-b border-cerulean-500">
        <a href="">ABOUT</a>
      </span>
      <span className="text-neutral-600 tracking-wider">
        <a href="">SKILLS</a>
      </span>
      <span className="text-neutral-600 tracking-wider">
        <a href="">EXPERIENCE</a>
      </span>
      <span className="text-neutral-600 tracking-wider">
        <a href="">PROJECT</a>
      </span>
      <span className="text-neutral-600 tracking-wider">
        <a href="">BLOG</a>
      </span>
      <span className="text-neutral-600 tracking-wider">
        <a href="">EDUCATION</a>
      </span>
      <span className="text-neutral-600 tracking-wider">
        <a href="">FUN POINTS</a>
      </span>
      <span className="text-neutral-600 tracking-wider">
        <a href="">CONTACT</a>
      </span>
    </div>
  );
}
