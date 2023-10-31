"use client";

export default function NavTabs() {
  return (
    <div className="flex items-center gap-10">
      <span>
        <a href="/portfolio">PORTFOLIO</a>
      </span>
      <span>
        <a href="/recent-work">WORK</a>
      </span>
      <span>
        <a href="/blog">BLOG</a>
      </span>
      <span>
        <a href="/contact">CONTACT</a>
      </span>
    </div>
  );
}
