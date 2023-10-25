import { DocumentIcon } from "@/app/components/Icons/svg";

export default function EducationView() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <div className="px-6 py-3 flex items-center justify-between border-neutral-200 bg-cerulean-500 ">
          <span className="tracking-widest text-white">
            MASTER DEGREE GRAPHIC DESIGN
          </span>
          <button
            type="button"
            className="inline-flex justify-center items-center"
          >
            <DocumentIcon className="text-white" />
          </button>
        </div>
        <div className="p-6 border border-neutral-200">
          <p className="text-neutral-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            temporibus tenetur unde officiis minima quos cupiditate mollitia
            quod sequi sint. <br /> Voluptatum eum, nulla illum dicta recusandae
            beatae nihil magnam rem!
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="px-6 py-3 flex items-center justify-between border-neutral-200 bg-neutral-200 ">
          <span className="tracking-widest text-neutral-800">
            MASTER DEGREE GRAPHIC DESIGN
          </span>
          <button
            type="button"
            className="inline-flex justify-center items-center"
          >
            <DocumentIcon className="text-white" />
          </button>
        </div>
        <div className="p-6 border border-neutral-100">
          <p className="text-neutral-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            temporibus tenetur unde officiis minima quos cupiditate mollitia
            quod sequi sint. <br /> Voluptatum eum, nulla illum dicta recusandae
            beatae nihil magnam rem!
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="px-6 py-3 flex items-center justify-between border-neutral-200 bg-neutral-200 ">
          <span className="tracking-widest text-neutral-800">
            MASTER DEGREE GRAPHIC DESIGN
          </span>
          <button
            type="button"
            className="inline-flex justify-center items-center"
          >
            <DocumentIcon className="text-white" />
          </button>
        </div>
        <div className="p-6 border border-neutral-100">
          <p className="text-neutral-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            temporibus tenetur unde officiis minima quos cupiditate mollitia
            quod sequi sint. <br /> Voluptatum eum, nulla illum dicta recusandae
            beatae nihil magnam rem!
          </p>
        </div>
      </div>
    </div>
  );
}
