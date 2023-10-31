import { BLOGS } from "../data";

export default function BlogsView() {
  return (
    <div className="mx-[-1rem] flex">
      {BLOGS.slice(0, 3).map(({ id, title, date, tag }) => {
        return (
          <div key={id} className="w-1/3 px-4">
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-video bg-neutral-300"></div>
              <p className="text-sm tracking-widest text-neutral-400">
                {`${date.toUpperCase()} | ${tag.toUpperCase()}`}
              </p>
              <p className="text-sm tracking-wider text-neutral-800">
                {title.toUpperCase()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
