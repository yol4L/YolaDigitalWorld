import { PERSONALITIES } from "../data";

export default function PersonalityView() {
  return (
    <div className="mx-[-0.75rem] flex flex-wrap items-stretch">
      {PERSONALITIES.map(({ id, name, desc, icon: Icon }) => {
        return (
          <div key={id} className="w-1/4 xl:aspect-square p-3">
            <div className="w-full h-full px-4 py-6 flex flex-col justify-top gap-2 border-b-2 border-cerulean-400 shadow-xl">
              <Icon className="text-cerulean-500" />
              <h3 className="font-serif text-sm">{name}</h3>
              <p className="text-xs text-neutral-600">{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
