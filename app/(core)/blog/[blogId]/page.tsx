"use client";

import TopNavView from "@/app/components/topNav";
import { BLOGS } from "@/app/(core)/portfolio/data";

interface Blog {
  id: string;
  title: string;
  headline: string;
  date: string;
  author: string;
  tag: string;
}

export async function getServerComponentProps({
  params: { blogId },
}: {
  params: { blogId: string };
}) {
  const blog: Blog | undefined =
    BLOGS.find((b) => b.id === blogId) || undefined;

  if (!blog) {
    // Handle the case when the blog post is not found (e.g., show a 404 page)
    return {
      status: 404,
      component: () => <div>Blog not found</div>,
    };
  }

  return {
    props: { blog },
  };
}

export default function SingleBlogPage({ blog }: { blog: Blog }) {
  if (!blog) {
    return null; // You can also handle this case differently, e.g., by showing a loading spinner.
  }

  if (blog) {
    const { title, headline, date, author, tag } = blog;

    return (
      <div>
        <TopNavView />
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
}
