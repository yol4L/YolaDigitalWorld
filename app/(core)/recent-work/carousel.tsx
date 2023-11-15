"use client";

import { useState } from "react";
import Image from "next/image";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const CAROUSEL_CONTENTS: { url: string; description: string }[] = [
  {
    url: "/projects/news_feed_demo/01_text_post.gif",
    description: "Implements a streamlined posting feature in news feed.",
  },
  {
    url: "/projects/news_feed_demo/02_vote_and_edit.gif",
    description:
      "Incorporates an effective voting and content editing mechanism.",
  },
  {
    url: "/projects/news_feed_demo/03_hierarchical_structured_comments.gif",
    description: "Adopts a hierarchical structure for comments.",
  },
  {
    url: "/projects/news_feed_demo/04_comments_vote_edit_delete.gif",
    description: "Integrates comment options to vote, edit, and delete",
  },
  {
    url: "/projects/news_feed_demo/05_copy_link_to_share.gif",
    description: "Employs an easy-to-use link copying for sharing",
  },
  {
    url: "/projects/news_feed_demo/06_media_post.gif",
    description: "Enables intuitive media uploads with Base64.",
  },
  {
    url: "/projects/news_feed_demo/07_drag_and_drop.gif",
    description: "Introduces user-friendly drag-and-drop interfaces.",
  },
];

export default function CarouselView() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? CAROUSEL_CONTENTS.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === CAROUSEL_CONTENTS.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full relative flex flex-col rounded-lg shadow-xl overflow-hidden">
      <div className="w-full h-full px-2 pt-2 shadow-lg">
        <div className="w-full aspect-video relative rounded-md shadow-md overflow-hidden">
          <Image
            src={CAROUSEL_CONTENTS[currentIndex].url}
            alt={CAROUSEL_CONTENTS[currentIndex].description}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-full p-2 flex items-center justify-between bg-cerulean-500 ">
        <button
          onClick={goToPrevious}
          className="inline-flex items-center justify-center text-slate-200"
        >
          <NavigateBeforeIcon />
        </button>
        <div className="grow px-2 flex items-center gap-4 text-sm text-slate-50">
          <span className="grow italic">
            {CAROUSEL_CONTENTS[currentIndex].description}
          </span>
          <span className="">
            {`${currentIndex + 1}/${CAROUSEL_CONTENTS.length}`}
          </span>
        </div>
        <button
          onClick={goToNext}
          className="inline-flex items-center justify-center text-slate-200"
        >
          <NavigateNextIcon />
        </button>
      </div>
    </div>
  );
}
