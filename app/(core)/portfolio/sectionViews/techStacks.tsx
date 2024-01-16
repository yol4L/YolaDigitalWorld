"use client";

import { useEffect, useState } from "react";
import cx from "classnames";
import { BACKGROUND_COLORS, TECH_STACKS } from "@/app/data";

function getBgColor() {
  const i = Math.floor(Math.random() * BACKGROUND_COLORS.length);
  const bgColor = BACKGROUND_COLORS[i];
  return bgColor;
}

export default function TechStacksView({
  inView,
  scrollingUp,
}: {
  inView: boolean;
  scrollingUp: boolean;
}) {
  const [colors, setColors] = useState<Record<string, string[]>>({});

  useEffect(() => {
    setColors(
      TECH_STACKS.reduce<Record<string, string[]>>((prev, curr) => {
        prev[curr.id] = new Array(curr.stacks.length)
          .fill(0)
          .map(() => getBgColor());
        return prev;
      }, {})
    );
    // { "framework": ["c1", "c2",], "work": ["c3", "c4"], ...}
  }, [setColors]);

  return (
    <div className="mx-[-0.75rem] -mb-20 flex flex-wrap items-stretch">
      {TECH_STACKS.map(({ id, name, icon: Icon, stacks }, i) => {
        return (
          <div
            key={id}
            className={cx(
              "w-full lg:w-1/2 p-3",
              inView &&
                !scrollingUp &&
                (i % 2 === 0 ? "animate-slideRight" : "animate-slideLeft")
            )}
          >
            <div className="w-full h-full p-4 md:p-6 flex shadow-md dark:shadow-slate-900 transition-all duration-700">
              <div className="p-1 md:p-2 pr-2 md:pr-4 flex items-center border-r border-cerulean-400 dark:border-brick-400 transition-colors duration-700">
                <Icon
                  fontSize="large"
                  className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 font-light text-cerulean-500 dark:text-brick-400 transition-colors duration-700"
                />
              </div>
              <div className="p-1 md:p-2 pl-3 md:pl-4 flex flex-col gap-2">
                <h3 className="text-sm md:text-base font-semibold tracking-widest text-slate-800 dark:text-slate-100 transition-colors duration-700">
                  {name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stacks.map((stack, i) => {
                    return (
                      <div
                        key={stack.toString()}
                        className="px-2 md:px-3 py-0.5 flex items-center justify-start rounded-md cursor-pointer"
                        style={{ backgroundColor: (colors[id] ?? [])[i] }}
                      >
                        <span className="text-xs md:text-sm text-white tracking-wider">
                          {stack}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
