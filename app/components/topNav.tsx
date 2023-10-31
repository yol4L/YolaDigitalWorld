import Link from "next/link";
import Image from "next/image";
import NavTabs from "./Tabs/navTabs";
import DarkModeView from "./darkMode";

export default function TopNavView() {
  return (
    <nav className="px-20 w-full py-3 fixed top-0 z-10 flex items-center justify-between bg-white border-b border-neutral-50">
      <Link href={"/"} className="relative flex items-center gap-2">
        <Image
          src="yola-brand-avatar.svg"
          alt="brand-avatar"
          width={30}
          height={30}
        />
        <span>Yola&apos;s World</span>
      </Link>
      <div className="flex items-center gap-10">
        <NavTabs />
        <DarkModeView />
      </div>
    </nav>
  );
}
