import Image from "next/image";
import { DocumentIcon } from "./components/Icons/svg";
import PageTagView from "./components/Tags/pageTag";
import PortfolioView from "./(core)/portfolio/portfolioView";
import TopNavView from "./components/topNav";
import cx from "classnames";

export default function Home() {
  return (
    <main className="h-screen relative flex flex-col font-sans overflow-y-scroll scrollbar-none">
      <TopNavView />
      <div className="flex flex-col">
        {/* Home */}
        <div id="home" className="w-full h-screen px-20 flex flex-col">
          <div className="min-h-0 grow px-20 w-full flex justify-between">
            {/* Welcome info */}
            <div className="w-1/2 flex flex-col justify-center gap-8">
              <PageTagView tagName={"About"} />
              <div className="flex flex-col gap-4">
                <h1
                  className={cx(
                    "font-bold text-6xl tracking-wider text-ocean-500",
                    "dark:text-slate-100 transition-colors duration-700"
                  )}
                >
                  Hi, I&apos;m Yola
                </h1>
                <p className="text-xl font-light tracking-wider">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <button
                type="button"
                className={cx(
                  "w-auto px-6 py-4 self-start relative rounded-2xl overflow-hidden",
                  "bg-neutral-200 dark:bg-slate-900 transition-colors duration-700"
                )}
              >
                <div className="inline-flex items-center gap-2 text-ocean-500 dark:text-slate-100">
                  <DocumentIcon className=" font-light" />
                  <span className="font-medium text-xl tracking-widest">
                    DOWNLOAD MY RESUME
                  </span>
                </div>
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
