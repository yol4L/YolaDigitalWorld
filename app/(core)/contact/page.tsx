import NavTabs from "@/app/components/Tabs/navTabs";
import ContactMeView from "./contact";
import Image from "next/image";
import DarkModeView from "@/app/components/darkMode";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div>
      {/* Navigation bar */}
      <nav className="px-20 w-full py-3 sticky top-0 z-10 flex items-center justify-between bg-white border-b border-neutral-50">
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
      {/* Main */}
      <div className="px-20">
        <ContactMeView />
      </div>
    </div>
  );
}
