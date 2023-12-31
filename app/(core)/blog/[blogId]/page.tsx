import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

import TopNavView from "@/app/components/Tabs/topNav";
import BackToTopButton from "@/app/components/backToTopButton";
import { CodeBlock } from "./codeBlock";

import { BlogBlock, BlogData, MuiIconType, TableCell } from "@/app/types";
import { BLOGS } from "@/app/data";
import FooterView from "@/app/components/footer";

// const SHARE_BUTTONS: { id: string; icon: MuiIconType }[] = [
//   { id: "facebook", icon: NoteIcon },
//   { id: "twitter", icon: NoteIcon },
//   { id: "linkedIn", icon: NoteIcon },
//   { id: "mail", icon: NoteIcon },
//   { id: "link", icon: NoteIcon },
// ];

async function getBlog(blogId: string): Promise<BlogData | undefined> {
  return BLOGS.find((b) => b.id === blogId);
}

// Define blog block props based on its category
type ParagraphContentProps = Extract<
  BlogBlock,
  { category: "paragraph" }
>["attributes"]["content"];

type HeadingContentProps = Extract<
  BlogBlock,
  { category: "heading" }
>["attributes"]["content"];

type ImageProps = Extract<BlogBlock, { category: "image" }>["attributes"];

type TableProps = Extract<
  BlogBlock,
  { category: "table" }
>["attributes"]["rows"];

// Define block styles based on its category
const Heading: React.FC<{ text: HeadingContentProps }> = ({ text }) => {
  return (
    <h1 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">{text}</h1>
  );
};

const TextWithCode: React.FC<{
  text: ParagraphContentProps;
}> = ({ text }) => {
  const parseText = (text: string) => {
    const parts = text.split(/(`.*?`)/);
    return parts.map((part, index) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={index}
            className={cx(
              "px-2 rounded-sm font-mono text-xs sm:text-sm",
              "text-slate-800 dark:text-slate-100",
              "bg-slate-200 dark:bg-slate-600 transition-all duration-700"
            )}
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  return (
    <p className="my-4 text-sm sm:text-base text-justify">{parseText(text)}</p>
  );
};

const ImageAndGraph: React.FC<{
  src: ImageProps["src"];
  alt: ImageProps["alt"];
}> = ({ src, alt }) => {
  return (
    <div className="my-4 w-full aspect-video relative">
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  );
};

const renderTableCell = (cell: TableCell) => {
  if (typeof cell.content === "string") {
    return (
      <td
        className={cx(
          "p-4 text-sm sm:text-base border transition-colors duration-700",
          "text-slate-800 dark:text-slate-100",
          "border-slate-200 dark:border-slate-700"
        )}
      >
        {cell.content}
      </td>
    );
  } else {
    // Render image
    return (
      <td
        className={cx(
          "p-4 text-sm sm:text-base border transition-colors duration-700",
          "text-slate-800 dark:text-slate-100",
          "border-slate-200 dark:border-slate-700"
        )}
      >
        <div className="w-full aspect-square relative">
          <Image
            src={cell.content.src}
            alt={cell.content.alt}
            fill
            className="object-cover"
          />
        </div>
      </td>
    );
  }
};

const TableStructure: React.FC<{ rows: TableProps }> = ({ rows }) => {
  // Assuming all rows have the same keys, use the first row to determine headers
  const headers = rows[0] ? Object.keys(rows[0]) : [];

  return (
    <table className="w-full my-4 table-fixed border-collapse text-center text-sm">
      <thead
        className={cx(
          "border text-slate-50 transition-colors duration-700",
          "border-slate-200 dark:border-slate-700",
          "bg-cerulean-500 dark:bg-brick-300 "
        )}
      >
        <tr>
          {headers.map((headerText, index) => {
            return (
              <th
                key={index}
                className={cx(
                  "px-0 md:px-8 py-3 md:py-4 text-sm sm:text-base border font-semibold transition-colors duration-700",
                  "border-slate-200 dark:border-slate-700"
                )}
              >
                {headerText}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="border border-slate-200">
        {rows.map((row, index) => (
          <tr
            key={index}
            className={cx(
              "border transition-colors duration-700",
              "border-slate-200 dark:border-slate-700",
              "bg-transparent even:bg-slate-100 dark:even:bg-slate-900"
            )}
          >
            {Object.values(row).map(renderTableCell)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default async function SingleBlogPage({
  params: { blogId },
  ...rest
}: {
  params: { blogId: string };
}) {
  const blog = await getBlog(blogId);

  if (!blog) {
    return <div>No blog found</div>;
  }

  // console.log("single", rest, blogId);

  const { title, headline, date, author, tag, cover, quote, contents } = blog;

  return (
    <div className="w-full">
      <TopNavView />
      <BackToTopButton />
      {/* Headings */}
      <div className="w-full md:w-4/5 lg:w-5/8 px-5 md:px-20 mx-auto pt-24 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="w-6 h-0.5 relative top-[-1px] bg-ocean-500"></div>
          <span className="text-xs tracking-widest text-ocean-500">
            {tag.toUpperCase()}
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold ">
          {title}
        </h3>
        <p className="text-sm sm:text-base">
          <span className="text-neutral-400">{`${date.toUpperCase()} - BY `}</span>
          <span
            className={cx(
              " transition-colors duration-700",
              "text-cerulean-500 dark:text-brick-300",
              "hover:text-cerulean-700 dark:hover:text-brick-700"
            )}
          >
            <a href="/portfolio">{author.toUpperCase()}</a>
          </span>
        </p>
        <div className="my-2">
          <div className="w-full aspect-[2.35/1] relative bg-neutral-300">
            <Image src={cover} alt={title} fill className="object-cover" />
          </div>
          <p className="py-2 italic text-sm text-neutral-400">{headline}</p>
        </div>
        {/* <div className="mx-[-0.5rem] flex flex-wrap">
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
        </div> */}
      </div>
      {/* Main */}
      <article className="w-full md:w-4/5 lg:w-5/8 px-5 md:px-20 mx-auto mb-20">
        {/* Quote */}
        {/* Please modify the height for the pseudo element ::before to change the quote's vertical position,
          and modify the left inset and margin right value to change its horizontal position. */}
        <div className="before:content-[''] before:w-0 before:h-80 before:float-left hidden">
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
        {contents.map((content, index) => {
          switch (content.category) {
            case "paragraph":
              return (
                <TextWithCode key={index} text={content.attributes.content} />
              );
            case "heading":
              return <Heading key={index} text={content.attributes.content} />;
            case "image":
              return (
                <ImageAndGraph
                  key={index}
                  src={content.attributes.src}
                  alt={content.attributes.alt}
                />
              );
            case "code":
              return (
                <CodeBlock
                  key={index}
                  content={content.attributes.content}
                  language={content.attributes.language}
                />
              );
            case "table":
              return (
                <TableStructure key={index} rows={content.attributes.rows} />
              );
            default:
              return null;
          }
        })}
        <hr className="mt-10" />

        {/* Author */}
        <div className="my-8 flex items-center flex-nowrap gap-8">
          <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 shrink-0 relative rounded-full overflow-hidden">
            <Image
              src={"/images/home/yola-avatar.jpg"}
              alt="Yola Liang"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1 font-mono">
            <p className="text-base sm:text-lg font-semibold tracking-wider text-cerulean-500 dark:text-brick-300 transition-colors duration-700">
              <span>{`Author: `}</span>
              <span>
                <a href="/portfolio">{author}</a>
              </span>
            </p>
            <p className="text-xs sm:text-sm text-slate-400">{`Web Developer | Enthusiast for frontend programming`}</p>
            <p className="text-xs sm:text-sm text-justify text-slate-600 dark:text-slate-300 transition-colors duration-700">
              A web developer who continuously strives to create captivating and
              user-centric digital experiences while staying at the forefront of
              emerging technologies and design trends.
            </p>
          </div>
        </div>
      </article>
      {/* Navigation */}
      <div className="w-full md:w-4/5 lg:w-5/8 px-5 md:px-20 mx-auto mb-20">
        <Link href={"/blog"}>
          <span
            className={cx(
              "font-semibold transition-colors duration-700",
              "text-cerulean-500 dark:text-brick-300",
              "hover:text-cerulean-700 dark:hover:text-brick-700"
            )}
          >
            ← Back to All Blogs
          </span>
        </Link>
      </div>
      {/* Footer */}
      <FooterView />
    </div>
  );
}
