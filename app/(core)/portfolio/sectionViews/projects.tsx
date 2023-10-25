export default function ProjectsView() {
  return (
    <div className="flex gap-6">
      <div className="w-1/3 aspect-square flex flex-col rounded-2xl shadow-lg overflow-hidden">
        <div className="w-full h-3/5 bg-neutral-300"></div>
        <div className="p-4 flex flex-col gap-2">
          <h3 className="font-serif tracking-widest">YELPCAMP</h3>
          <p className="text-sm italic text-neutral-300">
            React, Node.js, MongoDB, Express (MERN)
          </p>
          <p className="text-sm text-neutral-800">
            A full-stack website project where users can create and review
            campgrounds.
          </p>
        </div>
      </div>
      <div className="w-1/3 aspect-square flex flex-col rounded-2xl shadow-lg overflow-hidden">
        <div className="w-full h-3/5 bg-neutral-300"></div>
        <div className="p-4 flex flex-col gap-2">
          <h3 className="font-serif tracking-widest">NEWSFEED</h3>
          <p className="text-sm italic text-neutral-300">
            React, Node.js, MongoDB, Express (MERN)
          </p>
          <p className="text-sm text-neutral-800">
            A full-stack website project where users can create and review
            campgrounds.
          </p>
        </div>
      </div>
      <div className="w-1/3 aspect-square flex flex-col rounded-2xl shadow-lg overflow-hidden">
        <div className="w-full h-3/5 bg-neutral-300"></div>
        <div className="p-4 flex flex-col gap-2">
          <h3 className="font-serif tracking-widest">ZOOMBIES</h3>
          <p className="text-sm italic text-neutral-300">
            React, Node.js, MongoDB, Express (MERN)
          </p>
          <p className="text-sm text-neutral-800">
            A full-stack website project where users can create and review
            campgrounds.
          </p>
        </div>
      </div>
    </div>
  );
}
