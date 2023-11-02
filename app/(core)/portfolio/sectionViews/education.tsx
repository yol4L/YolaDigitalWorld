import { DocumentIcon } from "@/app/components/Icons/svg";
import { EDUCATION_DATA } from "../data";
import cx from "classnames";

export default function EducationView() {
  return (
    <div className="-mb-20 flex flex-col gap-4">
      {EDUCATION_DATA.map(({ id, title, desc }) => {
        return (
          <div key={id} className="flex flex-col">
            <div
              className={cx(
                "px-6 py-3 flex items-center justify-between transition-colors duration-700",
                "bg-cerulean-500 dark:bg-brick-300"
              )}
            >
              <span className="tracking-widest text-white">
                {title.toUpperCase()}
              </span>
              <button
                type="button"
                className="inline-flex justify-center items-center"
              >
                <DocumentIcon className="text-white" />
              </button>
            </div>
            <div className="p-6 border border-slate-200 dark:border-slate-600 transition-colors duration-700">
              {desc.map((d) => {
                return (
                  <p
                    key={d.slice(0, 5)}
                    className="text-slate-800 dark:text-slate-200 transition-colors duration-700"
                  >
                    {d}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
