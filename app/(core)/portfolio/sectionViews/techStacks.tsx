import { NoteIcon } from "@/app/components/Icons/svg";

export default function TechStacksView() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <div className="w-1/2 p-4 shadow-md flex">
          <div className="p-2 pr-4 flex items-center border-r border-cerulean-400">
            <NoteIcon
              fontSize="large"
              className="w-16 h-16 text-cerulean-500"
            />
          </div>
          <div className="p-2 pl-4 flex flex-col gap-2">
            <h3 className="font-serif text-sm tracking-widest">FRAMEWORK</h3>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-cerulean-400">
                <span className="text-xs text-white tracking-wider">React</span>
              </div>
              <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-[#F3B4BB]">
                <span className="text-xs text-white tracking-wider">
                  Next.js
                </span>
              </div>
              <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-[#F6C050]">
                <span className="text-xs text-white tracking-wider">Redux</span>
              </div>
              <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-[#6878B1]">
                <span className="text-xs text-white tracking-wider">
                  TailwindCSS
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-4 shadow-md flex">
          <div className="p-2 pr-4 flex items-center border-r border-cerulean-400">
            <NoteIcon
              fontSize="large"
              className="w-16 h-16 text-cerulean-500"
            />
          </div>
          <div className="p-2 pl-4 flex flex-col gap-2">
            <h3 className="font-serif text-sm tracking-widest">FRONT-END</h3>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-cerulean-400">
                <span className="text-xs text-white tracking-wider">HTML</span>
              </div>
              <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-[#F3B4BB]">
                <span className="text-xs text-white tracking-wider">CSS</span>
              </div>
              <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-[#F6C050]">
                <span className="text-xs text-white tracking-wider">
                  JavaScript
                </span>
              </div>
              <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-[#6878B1]">
                <span className="text-xs text-white tracking-wider">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-1/2 p-4 shadow-md flex">
          <div className="p-2 pr-4 flex items-center border-r border-cerulean-400">
            <NoteIcon
              fontSize="large"
              className="w-16 h-16 text-cerulean-500"
            />
          </div>
          <div className="p-2 pl-4 flex flex-col gap-2">
            <h3 className="font-serif text-sm tracking-widest">DATABASE</h3>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-cerulean-400">
                <span className="text-xs text-white tracking-wider">
                  MongoDB
                </span>
              </div>
              <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-[#F3B4BB]">
                <span className="text-xs text-white tracking-wider">
                  GraphQL
                </span>
              </div>
              <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-[#F6C050]">
                <span className="text-xs text-white tracking-wider">MySQL</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-4 shadow-md flex">
          <div className="p-2 pr-4 flex items-center border-r border-cerulean-400">
            <NoteIcon
              fontSize="large"
              className="w-16 h-16 text-cerulean-500"
            />
          </div>
          <div className="p-2 pl-4 flex flex-col gap-2">
            <h3 className="font-serif text-sm tracking-widest">OTHERS</h3>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-cerulean-400">
                <span className="text-xs text-white tracking-wider">Git</span>
              </div>
              <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-[#F3B4BB]">
                <span className="text-xs text-white tracking-wider">
                  Node.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
