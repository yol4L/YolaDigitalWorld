"use client";

import {
  ForwardedRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import cx from "classnames";
import { SectionContentItem } from "@/app/types";
import { SECTION_CONTENTS } from "@/app/data";
import React from "react";
import SideBarView from "@/app/components/Tabs/sideBar";

const SectionBlockView = ({
  content,
  inView,
  scrollingUp,
}: {
  content: Extract<SectionContentItem, { type: "section" }>;
  inView: boolean;
  scrollingUp: boolean;
}) => {
  const {
    id,
    title,
    headerText,
    description,
    relatedComponent: RelatedComponent,
  } = content;

  return (
    <section id={id} className="flex flex-col gap-4 snap-start">
      <div className="mt-28 mb-4 md:mb-6 flex flex-col gap-4 md:gap-6">
        <span
          className={cx(
            "text-sm md:text-base tracking-widest text-slate-400 dark:text-brick-200",
            inView && !scrollingUp && "animate-slideLeft"
          )}
        >
          {title}
        </span>
        <h1
          className={cx(
            "text-lg md:text-xl font-semibold tracking-widest",
            inView && !scrollingUp && "animate-slideRight"
          )}
        >
          {headerText}
        </h1>
        {description.length !== 0 && (
          <div className="flex flex-col gap-3 md:gap-4">
            {description.map((paragraph) => {
              return (
                <p
                  key={paragraph.slice(0, 8)}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                  className={cx(
                    "text-sm sm:text-base text-justify",
                    inView && !scrollingUp && "animate-slideLeft"
                  )}
                ></p>
              );
            })}
          </div>
        )}
      </div>
      <RelatedComponent inView={inView} scrollingUp={scrollingUp} />
    </section>
  );
};

const QuoteBlockView = ({
  content,
}: {
  content: Extract<SectionContentItem, { type: "quote" }>;
}) => {
  const { id, text, bgUrl } = content;

  return (
    <div
      id={id}
      className="-mb-20 mt-4 p-10 relative bg-fixed bg-cover"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="w-full h-full absolute top-0 left-0 bg-slate-950 opacity-30"></div>
      <p
        dangerouslySetInnerHTML={{ __html: text }}
        className={cx(
          "relative z-10 font-serif font-bold text-2xl sm:text-3xl md:text-4xl tracking-wider leading-loose",
          "text-white dark:text-white transition-colors duration-700"
        )}
      ></p>
    </div>
  );
};
interface PortfolioViewProps {
  // Define props here if needed (like event handlers, data from the parent component, etc.)
}

interface PortfolioViewRef {
  scrollToTop: () => void;
}

function PortfolioView(
  props: PortfolioViewProps,
  ref: ForwardedRef<PortfolioViewRef>
) {
  const [activeSection, setActiveSection] = useState<string>("about"); // Default to the first section
  const [comingSection, setComingSection] = useState<string>("about");

  const contentDivRef = useRef<HTMLElement>(null);

  useImperativeHandle(ref, () => ({
    scrollToTop: () => {
      contentDivRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    },
  }));

  const [prevY, setPrevY] = useState<number>(0); //
  const [scrollingUp, setScrollingUp] = useState<boolean>(false);
  // let lastScrollY = 0;

  const handleScroll = useCallback(() => {
    const sections = [
      "about",
      "skill",
      "experience",
      "project",
      "blog",
      "education",
      "fun_points",
      "contact",
    ];
    const contentDiv = contentDivRef.current;

    if (contentDiv) {
      // Get the current scroll position within the content div
      const scrollY = contentDiv.scrollTop;

      // Detect the scroll direction
      // to disable animation when scrolling up
      if (scrollY > 0) {
        setPrevY(scrollY);
        setScrollingUp(scrollY < prevY);
        // console.log(scrollingUp);
      }

      // if (scrollY > 0) {
      //   setScrollingUp(scrollY < lastScrollY);
      // }
      // lastScrollY = scrollY;
      // console.log(scrollingUp);

      // Calculate which section is currently in view,
      // to trigger side menu item alteration accordingly.
      const sectionInView = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop - 80;
          const elementHeight = element.offsetHeight;
          // console.log({ elementTop, elementHeight, scrollY });
          return scrollY >= elementTop && scrollY < elementTop + elementHeight;
        }
        return false;
      });

      // Update the active section
      if (sectionInView) {
        setActiveSection(sectionInView);
      }

      // Calculate which section is coming into view
      // to trigger section animation
      const wh = window.innerHeight;
      const sectionComing = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          // return scrollY <= element.offsetTop + 800 - contentDiv.offsetHeight;
          const { top, height } = element.getBoundingClientRect();
          return 0 < top && top < wh;
        }
        return false;
      });
      // Update the coming section
      if (sectionComing) {
        setComingSection(sectionComing);
      }
      // console.log("sc:", sectionComing);
    }
  }, [prevY]);
  // console.log("cs", comingSection);

  const checkInView = (sectionId: string) => {
    return sectionId === comingSection;
  };

  useEffect(() => {
    // Attach the onScroll event handler to the content div
    const contentDiv = contentDivRef.current;
    if (contentDiv) {
      contentDiv.addEventListener("scroll", handleScroll);
    }

    // Remove the event listener when the component unmounts
    return () => {
      if (contentDiv) {
        contentDiv.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <div className="pl-5 md:pl-20 w-full flex gap-5 md:gap-10 transition-[padding] duration-700">
      <SideBarView activeSection={activeSection} />
      <div
        ref={contentDivRef as React.MutableRefObject<HTMLDivElement>}
        className="h-screen relative overflow-x-hidden overflow-y-scroll scroll-smooth"
        onScroll={handleScroll}
      >
        <div className="pr-5 md:pr-20 relative flex flex-col gap-12">
          {SECTION_CONTENTS.map((content) => {
            switch (content.type) {
              case "section":
                return (
                  <SectionBlockView
                    key={content.id}
                    inView={checkInView(content.id)}
                    scrollingUp={scrollingUp}
                    content={content}
                  />
                );
              case "quote":
                return <QuoteBlockView key={content.id} content={content} />;
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef<PortfolioViewRef, PortfolioViewProps>(
  PortfolioView
);
