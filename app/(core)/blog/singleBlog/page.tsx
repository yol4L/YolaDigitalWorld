import { NoteIcon } from "@/app/components/Icons/svg";
import TopNavView from "@/app/components/topNav";
import { MuiIconType } from "@/app/types";

//JUST PSEUDO DATA FOR PRESENTING
const contents: string[] = [
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
];

const SHARE_BUTTONS: { id: string; icon: MuiIconType }[] = [
  { id: "facebook", icon: NoteIcon },
  { id: "twitter", icon: NoteIcon },
  { id: "linkedIn", icon: NoteIcon },
  { id: "mail", icon: NoteIcon },
  { id: "link", icon: NoteIcon },
];

export default function SingleBlogPage({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) {
  return (
    <div className="w-full">
      <TopNavView darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      {/* Headings */}
      <div className="w-full md:w-4/5 lg:w-5/8 px-20 py-12 mx-auto mt-16 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="w-6 h-0.5 relative top-[-1px] bg-ocean-500"></div>
          <span className="text-xs tracking-widest text-ocean-500">
            {"web design".toUpperCase()}
          </span>
        </div>
        <h3 className="text-4xl font-serif font-semibold text-neutral-800">
          This is the title main title
        </h3>
        <p className="text-xs">
          <span className="text-neutral-300">{`${"April 14, 2023".toUpperCase()} - BY `}</span>
          <span className="text-neutral-800">
            <a href="/portfolio">{"Yola Liang".toUpperCase()}</a>
          </span>
        </p>
        <div className="my-2">
          <div className="w-full aspect-[2.35/1] bg-neutral-300"></div>
          <p className="py-2 italic text-sm text-neutral-800">
            This is the headline for the article, which is very simple but
            summarised.
          </p>
        </div>
        <div className="mx-[-0.5rem] flex flex-wrap">
          {SHARE_BUTTONS.map(({ id, icon: Icon }) => {
            return (
              <div key={id} className="w-1/5 px-2">
                <button
                  type="button"
                  className="w-full px-8 py-3 inline-flex justify-center items-center border border-ocean-500"
                >
                  <Icon className="text-ocean-500" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {/* Main */}
      <div className="w-full md:w-4/5 lg:w-5/8 px-20 mx-auto">
        {/* Quote */}
        {/* Please modify the height for the pseudo element ::before to change the quote's vertical position,
          and modify the left inset and margin right value to change its horizontal position. */}
        <div className="before:content-[''] before:w-0 before:h-80 before:float-left ">
          <div
            className="w-96 h-64 my-4 mr-[-5.5rem] relative -left-28 p-12 float-left clear-left"
            style={{
              backgroundImage:
                "radial-gradient(currentColor 0.5px, transparent 0.5px)",
              backgroundSize: "calc(10 * 1px) calc(10 * 1px)",
            }}
          >
            <div className="w-full h-full p-4 flex justify-center items-center bg-white">
              <span className="font-semibold text-center">
                Happiness is when what you think, what you say, and what you do
                are in harmony.
              </span>
            </div>
          </div>
        </div>
        {/* Main blog */}
        {contents.map((content) => {
          return (
            <p key={content.slice(0, 8)} className="mb-4">
              {content}
            </p>
          );
        })}
      </div>
    </div>
  );
}
