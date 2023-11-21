import { EDUCATION_DATA } from "../../../data";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import cx from "classnames";
import { useState } from "react";

const EducationItem = ({
  item,
  index,
  inView,
}: {
  item: {
    id: string;
    title: string;
    period: string;
    desc: string[];
  };
  index: number;
  inView: boolean;
}) => {
  const { id, title, period, desc } = item;
  const [expanded, setExpanded] = useState<boolean>(index === 0);

  return (
    <div
      className={cx("flex flex-col z-10", inView && "animate-slideUp")}
      style={{ animationDelay: `${index * 0.25 + 0.5}s` }}
    >
      <div
        onClick={() => {
          setExpanded(!expanded);
          console.log("div");
        }}
        className={cx(
          "px-6 py-3 flex items-center justify-between transition-colors duration-700 cursor-pointer",
          index === 0
            ? "bg-cerulean-500 dark:bg-brick-300"
            : "bg-slate-300 dark:bg-slate-600"
        )}
      >
        <span className="tracking-wider text-white">
          {`${title.toUpperCase()} (${period})`}
        </span>
        <button
          type="button"
          className="inline-flex justify-center items-center text-white transition-colors duration-700"
        >
          {expanded ? (
            <RemoveIcon
              className={cx(
                "transition-opacity duration-500 ease-linear",
                expanded ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            />
          ) : (
            <AddIcon
              className={cx(
                "transition-opacity duration-500 ease-linear",
                expanded ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
            />
          )}
        </button>
      </div>
      <div
        className={cx(
          "border border-slate-200 dark:border-slate-600 transition-all duration-700 overflow-hidden",
          expanded
            ? "max-h-[1000px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <ul className="list-disc my-6 mx-4 px-4 flex flex-col gap-4 ">
          {desc.map((d) => {
            return (
              <li
                key={d.slice(0, 8)}
                className="text-justify text-slate-800 dark:text-slate-200 transition-colors duration-700"
              >
                {d}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default function EducationView({ inView }: { inView: boolean }) {
  return (
    <div className="-mb-20 flex flex-col gap-2">
      {EDUCATION_DATA.map((item, i) => {
        return (
          <EducationItem key={item.id} item={item} index={i} inView={inView} />
        );
      })}
    </div>
  );
}
