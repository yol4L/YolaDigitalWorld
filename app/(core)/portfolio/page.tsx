import NavTabs from "@/app/components/Tabs/navTabs";
import DarkModeView from "@/app/components/darkMode";
import Image from "next/image";
import PortfolioView from "./portfolioView";

export default function PortfolioPage() {
  return (
    <div>
      {/* Navigation bar */}
      <nav className="px-20 w-full py-3 fixed top-0 z-10 flex items-center justify-between bg-white border-b border-neutral-50">
        <div className="relative flex items-center gap-2">
          <Image
            src="yola-brand-avatar.svg"
            alt="brand-avatar"
            width={30}
            height={30}
          />
          <span>Yola&apos;s World</span>
        </div>
        <div className="flex items-center gap-10">
          <NavTabs />
          <DarkModeView />
        </div>
      </nav>
      <div className="px-20">
        <PortfolioView />
      </div>
    </div>
  );
}
