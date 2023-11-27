"use client";

import Image from "next/image";
import cx from "classnames";
import { FUN_FACTS } from "@/app/data";

export default function FunFactView({
  inView,
  scrollingUp,
}: {
  inView: boolean;
  scrollingUp: boolean;
}) {
  return (
    <div className="w-full aspect-[2/1] -mb-20 flex">
      <div
        className={cx(
          "w-1/2 h-full relative overflow-hidden",
          inView && !scrollingUp && "animate-slideRight"
        )}
      >
        <Image
          src="/images/funfacts/yola-fun.jpg"
          alt="yola-fun"
          fill
          className="object-cover"
        ></Image>
      </div>
      <div className="w-1/2 h-full flex flex-wrap">
        {FUN_FACTS.map(({ id, keyword, description, bgUrl }, i) => {
          return (
            <div
              key={id}
              className={cx(
                "w-1/2 relative flex justify-center items-center",
                "transition-colors duration-700",
                inView &&
                  !scrollingUp &&
                  (i % 2 === 0 ? "animate-slideUp" : "animate-slideDown")
              )}
              style={{
                backgroundImage: `Url(${bgUrl})`,
                backgroundSize: "cover",
              }}
            >
              <div
                className={cx(
                  "px-6 w-full h-full z-10 relative overflow-hidden",
                  "flex flex-col items-center justify-center gap-2",
                  "text-slate-50 group",
                  "before:content-[''] before:h-full before:absolute before:top-0 before:left-0 before:bg-cerulean-500 before:opacity-70 dark:before:bg-brick-400",
                  "fun_card"
                )}
              >
                <h3 className="text-center font-semibold group-hover:animate-lineUp">
                  {keyword}
                </h3>
                <p className="hidden group-hover:block text-sm text-center group-hover:animate-lineUp">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
