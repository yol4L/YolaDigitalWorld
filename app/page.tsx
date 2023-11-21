"use client";

import Image from "next/image";
import { DocumentIcon } from "@/app/components/Icons/svg";
import PageTagView from "@/app/components/Tags/pageTag";
import PortfolioView from "@/app/(core)/portfolio/portfolioView";
import TopNavView from "@/app/components/topNav";
import cx from "classnames";
import AnimatedBackgroundView from "@/app/components/bgAnimation";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

export default function Home() {
  return (
    <main className="h-screen relative flex flex-col font-sans overflow-y-scroll scrollbar-none">
      <TopNavView />
      <div
        id="line"
        className={cx(
          "w-[1.5px] h-[40vh] fixed right-12 bottom-8 overflow-hidden",
          "bg-slate-300 dark:bg-slate-600",
          "after-[''] after:w-full after:h-1/2 after:block after:relative after:top-[-50%] after:left-0",
          "after:bg-animated-scroll-light after:dark:bg-animated-scroll-dark after:animate-drop"
        )}
      ></div>
      <div className="flex flex-col">
        {/* Home */}
        <div id="home" className="w-full h-screen px-20 flex flex-col">
          <AnimatedBackgroundView />
          <div className="min-h-0 grow px-20 w-full flex justify-between">
            {/* Welcome info */}
            <div className="w-1/2 flex flex-col justify-center gap-8">
              <PageTagView tagName={"About"} />
              <h1
                className={cx(
                  "font-bold text-6xl tracking-wider text-ocean-500",
                  "dark:text-slate-100 transition-colors duration-700",
                  "animate-lineUp"
                )}
              >
                Hi, I&apos;m Yola
              </h1>
              <div className="flex flex-col gap-8 animate-lineUp">
                <p className="text-xl font-light tracking-wide">
                  A web developer who continuously strives to create captivating
                  and user-centric digital experiences while staying at the
                  forefront of emerging technologies and design trends.
                </p>
                <button
                  type="button"
                  className={cx(
                    "w-auto self-start relative rounded-2xl overflow-hidden",
                    "bg-neutral-200 dark:bg-slate-900 transition-colors duration-700"
                  )}
                >
                  <div
                    className={cx(
                      "px-6 py-4 relative inline-flex items-center gap-2 group",
                      "text-ocean-500 dark:text-slate-100 transition-[background-size_colors] duration-700",
                      "btn-bg-brick hover:btn-bg-brick-hover hover:text-slate-50"
                    )}
                  >
                    <DownloadOutlinedIcon className="animate-bounce group-hover:animate-none" />
                    <span className="font-medium text-xl tracking-widest">
                      DOWNLOAD MY RESUME
                    </span>
                  </div>
                </button>
              </div>
            </div>
            {/* Photo */}
            <div className="relative w-1/3 animate-fadeIn">
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
