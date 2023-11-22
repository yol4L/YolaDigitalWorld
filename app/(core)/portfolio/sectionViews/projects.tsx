"use client";

import Image from "next/image";
import Link from "next/link";
import cx from "classnames";
import { RECENT_WORK } from "@/app/data";

export default function ProjectsView({
  inView,
  scrollingUp,
}: {
  inView: boolean;
  scrollingUp: boolean;
}) {
  return (
    <div className="mx-[-1rem] flex flex-wrap items-stretch">
      {RECENT_WORK.slice(0, 3).map(
        ({ id, title, tech_stacks_desc, desc, coverUrl }, i) => {
          return (
            <Link
              key={id}
              href={`/recent-work/#${id}`}
              className={cx(
                "w-1/3 aspect-square px-4",
                inView &&
                  !scrollingUp &&
                  (i % 2 === 0 ? "animate-slideUp" : "animate-slideDown")
              )}
              style={{ animationDelay: `${i * 0.25}s` }}
            >
              <div
                className={cx(
                  "w-full h-full flex flex-col rounded-2xl overflow-hidden",
                  "hover:-translate-y-4  transition-all duration-700",
                  "shadow-lg  dark:shadow-slate-900 "
                )}
              >
                <div className="w-full aspect-video relative shrink-0 bg-neutral-300">
                  <Image
                    src={coverUrl}
                    alt="brand-avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 pb-6 flex flex-col gap-2">
                  <h3 className="font-semibold tracking-widest text-slate-800 dark:text-slate-100 transition-colors duration-700">
                    {title.toUpperCase()}
                  </h3>
                  <p className="text-xs italic font-mono text-slate-400 dark:text-slate-500 transition-colors duration-700">
                    {tech_stacks_desc}
                  </p>
                  <p
                    className={cx(
                      "truncated-text text-sm",
                      "text-slate-800 dark:text-slate-100 transition-colors duration-700"
                    )}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            </Link>
          );
        }
      )}
    </div>
  );
}
