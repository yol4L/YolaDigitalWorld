"use client";

import Link from "next/link";
import Image from "next/image";
import cx from "classnames";
import { BLOGS } from "@/app/data";

export default function BlogsView({
  inView,
  scrollingUp,
}: {
  inView: boolean;
  scrollingUp: boolean;
}) {
  return (
    <div className="mx-[-1rem] -mb-20 flex flex-wrap">
      {BLOGS.slice(0, 8).map(({ id, title, date, tag, cover }, i) => {
        return (
          <Link
            key={id}
            href={`/blog/${id}`}
            className={cx(
              "w-full sm:w-1/2 lg:w-1/3 p-4",
              inView &&
                !scrollingUp &&
                (i % 2 === 0 ? "animate-slideUp" : "animate-slideDown")
            )}
            style={{ animationDelay: `${i * 0.25}s` }}
          >
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              <div className="w-full aspect-video relative bg-neutral-300">
                <Image src={cover} alt={title} fill className="object-cover" />
              </div>
              <p className="text-sm tracking-widest text-neutral-400">
                {`${date.toUpperCase()} | ${tag.toUpperCase()}`}
              </p>
              <p className="text-sm md:text-base font-semibold tracking-wider">
                {title}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
