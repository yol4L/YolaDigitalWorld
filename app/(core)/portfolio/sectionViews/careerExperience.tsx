import { FourPointedStarIcon } from "@/app/components/Icons/svg";
import { Fragment } from "react";
import { CAREER_EXPERIENCES } from "../../../data";
import cx from "classnames";

export default function CareerExperienceView({ inView }: { inView: boolean }) {
  return (
    <Fragment>
      {CAREER_EXPERIENCES.map(
        ({ id, company, position_type, position, period, duties }, i) => {
          return (
            <div
              key={id}
              className={cx(
                "flex flex-col gap-2 last:-mb-20",
                inView &&
                  (i % 2 === 0 ? "animate-slideRight" : "animate-slideLeft")
              )}
              style={{ animationDelay: `${i * 2 + 0.5}s` }}
            >
              {/* Job title, including icon, company, position, period, etc. */}
              <div className="flex items-center gap-4">
                <div
                  className={cx(
                    "w-1/12 shrink-0 flex justify-center items-center"
                  )}
                >
                  <FourPointedStarIcon
                    fontSize="large"
                    className="text-slate-800 dark:text-slate-200 transition-colors duration-700"
                  />
                </div>
                <div className={cx("w-11/12")}>
                  <h3 className="tracking-widest">{company}</h3>
                  <p className="text-sm italic">
                    <span className="mr-2">
                      {`${position_type}, ${position}`}
                    </span>
                    <span className="text-slate-400">{period}</span>
                  </p>
                </div>
              </div>
              {/* Job duties */}
              <div className="h-full flex items-stretch gap-4">
                <div className="w-1/12 h-inherit shrink-0 relative">
                  <div className="w-1/2 h-full absolute border-r border-slate-400"></div>
                </div>
                <div
                  className={cx(
                    "w-11/12 my-2 p-6 rounded-md",
                    "bg-slate-200 dark:bg-slate-900 transition-colors duration-700"
                  )}
                >
                  <ul
                    className={cx(
                      "px-6 list-disc text-sm flex flex-col gap-3",
                      "text-slate-800 dark:text-slate-200 transition-colors duration-700"
                    )}
                  >
                    {duties.map((duty) => {
                      return (
                        <li key={duty.slice(0, 8)} className="text-justify">
                          {duty}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        }
      )}
    </Fragment>
  );
}
