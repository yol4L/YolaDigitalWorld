import { BACKGROUND_COLORS, TECH_STACKS } from "../data";

function getBgColor() {
  const i = Math.floor(Math.random() * BACKGROUND_COLORS.length);
  const bgColor = BACKGROUND_COLORS[i];
  return bgColor;
}

export default function TechStacksView() {
  return (
    <div className="mx-[-0.75rem] -mb-20 flex flex-wrap items-stretch">
      {TECH_STACKS.map(({ id, name, icon: Icon, stacks }) => {
        return (
          <div key={id} className="w-1/2 p-3">
            <div className="w-full h-full p-6 flex shadow-md dark:shadow-slate-900 transition-all duration-700">
              <div className="p-2 pr-4 flex items-center border-r border-cerulean-400 dark:border-brick-400 transition-colors duration-700">
                <Icon
                  fontSize="large"
                  className="w-16 h-16 font-light text-cerulean-500 dark:text-brick-400 transition-colors duration-700"
                />
              </div>
              <div className="p-2 pl-4 flex flex-col gap-2">
                <h3 className="text-sm tracking-widest text-slate-800 dark:text-slate-100 transition-colors duration-700">
                  {name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stacks.map((stack) => {
                    return (
                      <div
                        key={stack.toString()}
                        className="px-3 py-0.5 flex items-center justify-start rounded-md cursor-pointer"
                        style={{ backgroundColor: getBgColor() }}
                      >
                        <span className="text-xs text-white tracking-wider">
                          {stack}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
