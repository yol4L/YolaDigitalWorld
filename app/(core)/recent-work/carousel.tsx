"use client";

import { useState } from "react";
import Image from "next/image";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { CAROUSEL_CONTENTS } from "@/app/data";

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
