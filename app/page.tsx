import Image from "next/image";
import { DocumentIcon } from "./components/Icons/svg";
import NavTabs from "./components/Tabs/navTabs";
import DarkModeView from "./components/darkMode";
import PageTagView from "./components/Tags/pageTag";
import PortfolioView from "./(core)/portfolio/portfolioView";
import Link from "next/link";
// import cx from 'classnames';

export default function Home() {
  return (
    <main className="h-screen relative flex flex-col font-sans">
      {/* Navigation bar */}
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
      <div className="px-20 flex flex-col">
        {/* Home */}
        <div className="w-full h-screen flex flex-col">
          <div className="min-h-0 grow px-20 w-full flex justify-between">
            {/* Welcome info */}
            <div className="w-1/2 flex flex-col justify-center gap-8">
              <PageTagView />
              <div className="flex flex-col gap-4">
                <h1 className="font-serif font-bold text-6xl text-ocean-500">
                  Hi, I&apos;m Yola
                </h1>
                <p className="text-xl text-neutral-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <button
                type="button"
                className="w-auto px-6 py-4 self-start inline-flex items-center gap-2 rounded-2xl bg-neutral-200"
              >
                <DocumentIcon className="text-ocean-500" />
                <span className="font-semibold text-xl tracking-wide text-ocean-500">
                  DOWNLOAD MY RESUME
                </span>
              </button>
            </div>
            {/* Photo */}
            <div className="relative w-1/3">
              <Image
                src="/yola-photo.png"
                alt="yola-photo"
                fill
                className="object-cover overflow-visible"
              ></Image>
            </div>
          </div>
        </div>
        {/* Portfolio */}
        <PortfolioView />
      </div>
    </main>
  );
}
