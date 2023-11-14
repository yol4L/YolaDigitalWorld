"use client";

import PageTagView from "@/app/components/Tags/pageTag";
import TopNavView from "@/app/components/topNav";
import { BACKGROUND_COLORS, RECENT_WORK } from "../../data";
import Image from "next/image";
import cx from "classnames";
import { useEffect, useState } from "react";

function getBgColor() {
  const i = Math.floor(Math.random() * BACKGROUND_COLORS.length);
  const bgColor = BACKGROUND_COLORS[i];
  return bgColor;
}

export default function RecentWorkPage({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) {
  const [colors, setColors] = useState<Record<string, string[]>>({});

  useEffect(() => {
    setColors(
      RECENT_WORK.reduce<Record<string, string[]>>((prev, curr) => {
        prev[curr.id] = new Array(curr.tech_stacks.length)
          .fill(0)
          .map(() => getBgColor());
        return prev;
      }, {})
    );
    // { "framework": ["c1", "c2",], "work": ["c3", "c4"], ...}
  }, [setColors]);

  return (
    <div>
      <TopNavView darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="px-36 py-28 flex flex-col">
        <PageTagView tagName={"Projects"} />
        <div className="my-6 flex flex-col gap-4">
          <h1 className="font-serif font-bold text-3xl tracking-widest text-ocean-500">
            RECENT WORK
          </h1>
          <p className="text-neutral-800">
            Here are some of my recent work, my passion is... Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Nisi nobis nesciunt inventore
            nemo sunt beatae? Dolorum quos ex earum sed nesciunt voluptatibus
            eum minus error perspiciatis. Perferendis optio unde voluptatem.
          </p>
        </div>
        <div className="my-6 flex flex-col gap-10">
          {RECENT_WORK.map(({ id, title, tech_stacks, detailed_desc }, i) => {
            return (
              <div
                key={id}
                className={cx(
                  "flex items-stretch gap-10",
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                )}
              >
                <div className="w-1/3 aspect-video flex-none relative overflow-hidden bg-red-500">
                  <Image
                    src="/yola-funFact01.jpg"
                    alt="brand-avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div
                  className={cx(
                    "flex flex-col justify-center gap-2",
                    i % 2 === 0 ? "items-start " : "items-end"
                  )}
                >
                  <h3 className="text-xl font-serif font-semibold tracking-widest">
                    {title}
                  </h3>
                  <p
                    className={cx(
                      "text-sm",
                      i % 2 === 0 ? "text-start" : "text-end"
                    )}
                  >
                    {detailed_desc}
                  </p>
                  <div className="flex gap-4">
                    {tech_stacks.map((stack, i) => {
                      return (
                        <div
                          key={stack.toString()}
                          className="px-3 py-0.5 flex items-center justify-start rounded-md cursor-pointer"
                          style={{ backgroundColor: (colors[id] ?? [])[i] }}
                        >
                          <span className="text-xs text-white tracking-wider">
                            {stack}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    type="button"
                    className={cx(
                      "mt-2 inline-flex font-serif font-semibold",
                      i % 2 === 0 ? "self-start" : "self-end"
                    )}
                  >
                    <span>Have a try →</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
