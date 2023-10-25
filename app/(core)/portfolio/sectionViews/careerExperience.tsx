import { FourPointedStarIcon } from "@/app/components/Icons/svg";
import { Fragment } from "react";

export default function CareerExperienceView() {
  return (
    <Fragment>
      <div className="flex flex-col gap-2">
        {/* Job title, including icon, company, position, period, etc. */}
        <div className="flex items-center gap-4">
          <div className="w-1/12 shrink-0 flex justify-center items-center">
            <FourPointedStarIcon fontSize="large" />
          </div>
          <div className="w-11/12">
            <h3 className="font-serif tracking-widest">MOCHI LABS, CANBERRA</h3>
            <p className="text-sm italic">
              <span className="text-neutral-800 mr-4">
                Internship, Front-end Developer
              </span>
              <span className="text-neutral-300">July 2023 - Oct 2023</span>
            </p>
          </div>
        </div>
        {/* Job duties */}
        <div className="h-full flex items-center gap-4">
          <div className="w-1/12 h-full shrink-0 relative">
            <div className="w-1/2 h-full absolute border-r border-neutral-400"></div>
          </div>
          <div className="w-11/12 my-2 p-6 rounded-md bg-neutral-100">
            <ul className="px-6 list-disc text-sm flex flex-col gap-2">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Esse deserunt ad nemo natus quasi assumenda et? Repudiandae.
              </li>
              <li>
                Velit impedit obcaecati inventore doloremque consequuntur cumque
                atque maxime quas fugiat ducimus eveniet.
              </li>
              <li>
                Consequuntur cumque atque maxime quas fugiat ducimus eveniet.
              </li>
              <li>Atque maxime quas fugiat ducimus eveniet.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {/* Job title, including icon, company, position, period, etc. */}
        <div className="flex items-center gap-4">
          <div className="w-1/12 shrink-0 flex justify-center items-center">
            <FourPointedStarIcon fontSize="large" />
          </div>
          <div className="w-11/12">
            <h3 className="font-serif tracking-widest">YELPCAMP PROJECT</h3>
            <p className="text-sm italic">
              <span className="text-neutral-800 mr-4">
                Personal Project, Full stack Developer
              </span>
              <span className="text-neutral-300">Sep 2022 - June 2023</span>
            </p>
          </div>
        </div>
        {/* Job duties */}
        <div className="h-full flex items-center gap-4">
          <div className="w-1/12 h-full shrink-0 relative">
            <div className="w-1/2 h-full absolute border-r border-neutral-400"></div>
          </div>
          <div className="w-11/12 my-2 p-6 rounded-md bg-neutral-100">
            <ul className="px-6 list-disc text-sm flex flex-col gap-2">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Esse deserunt ad nemo natus quasi assumenda et? Repudiandae.
              </li>
              <li>
                Velit impedit obcaecati inventore doloremque consequuntur cumque
                atque maxime quas fugiat ducimus eveniet.
              </li>
              <li>
                Consequuntur cumque atque maxime quas fugiat ducimus eveniet.
              </li>
              <li>Atque maxime quas fugiat ducimus eveniet.</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
