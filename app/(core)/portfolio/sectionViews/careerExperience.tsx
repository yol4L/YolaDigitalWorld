import { FourPointedStarIcon } from "@/app/components/Icons/svg";
import { Fragment } from "react";
import { CAREER_EXPERIENCES } from "../data";

export default function CareerExperienceView() {
  return (
    <Fragment>
      {CAREER_EXPERIENCES.map(
        ({ id, company, position_type, position, period, duties }) => {
          return (
            <div key={id} className="flex flex-col gap-2 last:-mb-20">
              {/* Job title, including icon, company, position, period, etc. */}
              <div className="flex items-center gap-4">
                <div className="w-1/12 shrink-0 flex justify-center items-center">
                  <FourPointedStarIcon fontSize="large" />
                </div>
                <div className="w-11/12">
                  <h3 className="font-serif tracking-widest">{company}</h3>
                  <p className="text-sm italic">
                    <span className="text-neutral-800 mr-4">
                      {`${position_type}, ${position}`}
                    </span>
                    <span className="text-neutral-300">{period}</span>
                  </p>
                </div>
              </div>
              {/* Job duties */}
              <div className="h-full flex items-stretch gap-4">
                <div className="w-1/12 h-inherit shrink-0 relative">
                  <div className="w-1/2 h-full absolute border-r border-neutral-400"></div>
                </div>
                <div className="w-11/12 my-2 p-6 rounded-md bg-neutral-100">
                  <ul className="px-6 list-disc text-sm flex flex-col gap-2">
                    {duties.map((duty) => {
                      return <li key={duty.slice(0, 2)}>{duty}</li>;
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
