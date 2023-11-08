import PageTagView from "@/app/components/Tags/pageTag";
import TopNavView from "@/app/components/topNav";
import { BLOGS } from "../portfolio/data";

export default function BlogPage({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) {
  return (
    <div>
      <TopNavView darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="px-36 py-28">
        <PageTagView tagName={"Blog"} />
        <div className="my-6 flex flex-col gap-4">
          <h1 className="font-serif font-bold text-3xl tracking-widest text-ocean-500">
            MY BLOGS
          </h1>
          <p className="text-neutral-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
            tenetur perspiciatis facere nemo reiciendis assumenda veniam minima
            consequatur sunt? Sint blanditiis modi ratione maiores, voluptate
            deleniti debitis provident illo. Natus.
          </p>
        </div>
        <div className="mx-[-1rem] my-6 flex flex-wrap">
          {BLOGS.map(({ id, title, headline, date, author, tag }) => {
            return (
              <div key={id} className="w-1/3 px-4">
                <div className="flex flex-col gap-3">
                  <div className="w-full aspect-video my-6 bg-neutral-300"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-0.5 bg-ocean-500"></div>
                    <span className="text-xs tracking-widest text-ocean-500">
                      {tag.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold tracking-widest text-neutral-800">
                    {title}
                  </h3>
                  <p className="text-sm text-neutral-800">{headline}</p>
                  <p className="text-xs">
                    <span className="text-neutral-300">{`${date.toUpperCase()} - BY `}</span>
                    <span className="text-neutral-800">
                      <a href="/portfolio">{author.toUpperCase()}</a>
                    </span>
                  </p>
                  <button
                    type="button"
                    className="mt-2 inline-flex self-start font-serif font-semibold"
                  >
                    <span>Take a look →</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
