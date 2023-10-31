import { DocumentIcon } from "@/app/components/Icons/svg";
import { EDUCATION_DATA } from "../data";

export default function EducationView() {
  return (
    <div className="flex flex-col gap-4">
      {EDUCATION_DATA.map(({ id, title, desc }) => {
        return (
          <div key={id} className="flex flex-col">
            <div className="px-6 py-3 flex items-center justify-between border-neutral-200 bg-cerulean-500 ">
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
            <div className="p-6 border border-neutral-200">
              {desc.map((d) => {
                return (
                  <p key={d.slice(0, 5)} className="text-neutral-800">
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
