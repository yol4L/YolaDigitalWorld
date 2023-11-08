import { BLOGS } from "../data";
import cx from "classnames";

export default function BlogsView({ inView }: { inView: boolean }) {
  return (
    <div className="mx-[-1rem] -mb-20 flex">
      {BLOGS.slice(0, 8).map(({ id, title, date, tag }, i) => {
        return (
          <div
            key={id}
            className={cx(
              "w-1/3 px-4",
              inView && (i % 2 === 0 ? "animate-slideUp" : "animate-slideDown")
            )}
            style={{ animationDelay: `${i * 0.25}s` }}
          >
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-video bg-neutral-300"></div>
              <p className="text-sm tracking-widest text-neutral-400">
                {`${date.toUpperCase()} | ${tag.toUpperCase()}`}
              </p>
              <p className="text-sm tracking-wider">{title.toUpperCase()}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
