import { RECENT_WORK } from "../data";
import cx from "classnames";

export default function ProjectsView() {
  return (
    <div className="mx-[-1rem] flex flex-wrap items-stretch">
      {RECENT_WORK.slice(0, 3).map(({ id, title, tech_stacks_desc, desc }) => {
        return (
          <div key={id} className="w-1/3 aspect-square px-4">
            <div
              className={cx(
                "w-full h-full flex flex-col rounded-2xl overflow-hidden",
                "shadow-lg dark:shadow-slate-900 transition-all duration-700"
              )}
            >
              <div className="w-full h-3/5 bg-neutral-300"></div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="tracking-widest text-slate-800 dark:text-slate-100 transition-colors duration-700">
                  {title}
                </h3>
                <p className="text-sm italic text-slate-400 dark:text-slate-500 transition-colors duration-700">
                  {tech_stacks_desc}
                </p>
                <p className="text-sm text-slate-800 dark:text-slate-100 transition-colors duration-700">
                  {desc}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
