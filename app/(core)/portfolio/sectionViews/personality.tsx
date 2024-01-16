"use client";

import { PERSONALITIES } from "@/app/data";
import cx from "classnames";

export default function PersonalityView({
  inView,
  scrollingUp,
}: {
  inView: boolean;
  scrollingUp: boolean;
}) {
  return (
    <div className="mx-[-0.75rem] flex flex-wrap items-stretch">
      {PERSONALITIES.map(({ id, name, desc, icon: Icon }, i) => {
        return (
          <div
            key={id}
            className={cx(
              "w-1/2 lg:w-1/4 p-2 md:p-3",
              inView &&
                !scrollingUp &&
                (i % 2 === 0 ? "animate-slideUp" : "animate-slideDown")
            )}
          >
            <div
              className={cx(
                "w-full h-full px-4 py-6 flex flex-col justify-top gap-2 transition-all duration-700",
                "border-b-2 border-cerulean-400 dark:border-brick-300",
                "shadow-xl dark:shadow-slate-900"
              )}
            >
              <Icon className="text-cerulean-500 dark:text-brick-300 transition-colors duration-700" />
              <h3 className="font-serif font-semibold text-sm md:text-base text-slate-800 dark:text-slate-100 transition-colors duration-700">
                {name}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 transition-colors duration-700">
                {desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
