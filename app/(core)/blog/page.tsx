import PageTagView from "@/app/components/Tags/pageTag";
import TopNavView from "@/app/components/topNav";
import { BLOGS } from "../../data";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  return (
    <div>
      <TopNavView />
      <div className="px-36 py-28">
        <PageTagView tagName={"Blog"} />
        <div className="my-6 flex flex-col gap-4">
          <h1 className="font-serif font-bold text-3xl tracking-widest text-ocean-500">
            MY BLOGS
          </h1>
          <p className="">
            Discover my thoughts and insights on web development, design, and
            industry trends. In this section, I share knowledge, tips, and
            experiences. Join me in exploring the ever-evolving world of
            technology and design.
          </p>
        </div>
        <div className="mx-[-1rem] my-6 flex flex-wrap">
          {BLOGS.map(({ id, title, headline, date, author, tag, cover }) => {
            return (
              <div key={id} className="w-1/3 px-4">
                <div className="flex flex-col gap-3">
                  <Link href={`/blog/${id}`}>
                    <div className="w-full aspect-video my-6 relative bg-neutral-300">
                      <Image src={cover} alt="" fill className="object-cover" />
                    </div>
                  </Link>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-0.5 bg-ocean-500"></div>
                    <span className="text-xs tracking-widest text-ocean-500">
                      {tag.toUpperCase()}
                    </span>
                  </div>
                  <Link href={`/blog/${id}`}>
                    <h3 className="text-xl font-serif font-semibold tracking-wide">
                      {title}
                    </h3>
                  </Link>
                  <p className="text-sm">{headline}</p>
                  <p className="text-xs">
                    <span className="text-neutral-400">{`${date.toUpperCase()} - BY `}</span>
                    <span className="text-cerulean-500 hover:text-cerulean-700">
                      <a href="/portfolio">{author.toUpperCase()}</a>
                    </span>
                  </p>
                  <Link href={`/blog/${id}`}>
                    <button
                      type="button"
                      className="mt-2 inline-flex self-start font-serif font-semibold"
                    >
                      <span>Take a look →</span>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
