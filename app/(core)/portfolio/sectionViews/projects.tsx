import { RECENT_WORK } from "../data";

export default function ProjectsView() {
  return (
    <div className="mx-[-1rem] flex flex-wrap items-stretch">
      {RECENT_WORK.map(({ id, title, tech_stacks, desc }) => {
        return (
          <div key={id} className="w-1/3 aspect-square px-4">
            <div className="w-full h-full flex flex-col rounded-2xl shadow-lg overflow-hidden">
              <div className="w-full h-3/5 bg-neutral-300"></div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-serif tracking-widest">{title}</h3>
                <p className="text-sm italic text-neutral-300">{tech_stacks}</p>
                <p className="text-sm text-neutral-800">{desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
