import { BLOGS } from "../../../data";
import cx from "classnames";
import Link from "next/link";
import Image from "next/image";

export default function BlogsView({ inView }: { inView: boolean }) {
  return (
    <div className="mx-[-1rem] -mb-20 flex">
      {BLOGS.slice(0, 8).map(({ id, title, date, tag, cover }, i) => {
        return (
          <Link
            key={id}
            href={`/blog/${id}`}
            className={cx(
              "w-1/3 px-4",
              inView && (i % 2 === 0 ? "animate-slideUp" : "animate-slideDown")
            )}
            style={{ animationDelay: `${i * 0.25}s` }}
          >
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-video relative bg-neutral-300">
                <Image
                  src={cover}
                  alt={title.toString()}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm tracking-widest text-neutral-400">
                {`${date.toUpperCase()} | ${tag.toUpperCase()}`}
              </p>
              <p className="font-semibold tracking-wider">{title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
