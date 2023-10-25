import { NoteIcon } from "@/app/components/Icons/svg";

export default function PersonalityView() {
  return (
    <div className="flex gap-4">
      <div className="w-1/4 aspect-square px-4 py-6 flex flex-col justify-top gap-2 border-b-2 border-cerulean-400 shadow-xl">
        <NoteIcon className="text-cerulean-500" />
        <h3 className="font-serif text-sm">Highly Motivated</h3>
        <p className="text-xs text-neutral-600">
          Lorem ipsum dolor sit amet consectetur adipi elit. adipisicing elit.
        </p>
      </div>
      <div className="w-1/4 aspect-square px-4 py-6 flex flex-col justify-top gap-2 border-b-2 border-cerulean-400 shadow-xl">
        <NoteIcon className="text-cerulean-500" />
        <h3 className="font-serif text-sm">Result Oriented</h3>
        <p className="text-xs text-neutral-600">
          Lorem ipsum dolor sit amet consectetur adipi elit. adipisicing elit.
        </p>
      </div>
      <div className="w-1/4 aspect-square px-4 py-6 flex flex-col justify-top gap-2 border-b-2 border-cerulean-400 shadow-xl">
        <NoteIcon className="text-cerulean-500" />
        <h3 className="font-serif text-sm">Fast learner</h3>
        <p className="text-xs text-neutral-600">
          Lorem ipsum dolor sit amet consectetur adipi elit. adipisicing elit.
        </p>
      </div>
      <div className="w-1/4 aspect-square px-4 py-6 flex flex-col justify-top gap-2 border-b-2 border-cerulean-400 shadow-xl">
        <NoteIcon className="text-cerulean-500" />
        <h3 className="font-serif text-sm">Attention to Details</h3>
        <p className="text-xs text-neutral-600">
          Lorem ipsum dolor sit amet consectetur adipi elit. adipisicing elit.
        </p>
      </div>
    </div>
  );
}
