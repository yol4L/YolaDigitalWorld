import TopNavView from "@/app/components/topNav";
import { BLOGS } from "@/app/(core)/portfolio/data";
import { BlogData } from "@/app/(core)/portfolio/data";

async function getBlog(blogId: string): Promise<BlogData | undefined> {
  return BLOGS.find((b) => b.id === blogId);
}

export default async function SingleBlogPage({
  params: { blogId },
  darkMode,
  toggleDarkMode,
  ...rest
}: {
  params: { blogId: string };
  darkMode: boolean;
  toggleDarkMode: () => void;
}) {
  const blog = await getBlog(blogId);
  console.log("ps", blog);
  if (!blog) {
    return <div>No blog found</div>;
  }

  console.log("single", rest, blogId);

  const { title, headline, date, author, tag } = blog;

  return (
    <div>
      <TopNavView darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="px-40 py-28 flex flex-col">
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
        <div className="w-full aspect-video my-6 bg-neutral-300"></div>
      </div>
    </div>
  );
}
