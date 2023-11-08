"use client";

import SideMenuTabs from "@/app/components/Tabs/sideMenuTabs";
import SectionHeaderAndDesc from "@/app/components/sectionHeaderAndDesc";
import Image from "next/image";
import PersonalityView from "./sectionViews/personality";
import TechStacksView from "./sectionViews/techStacks";
import CareerExperienceView from "./sectionViews/careerExperience";
import ProjectsView from "./sectionViews/projects";
import BlogsView from "./sectionViews/blogs";
import EducationView from "./sectionViews/education";
import { SECTION_HEADER_AND_DESC_ITEMS } from "./data";
import ContactMeView from "../contact/contact";
import FunFactView from "./sectionViews/funFacts";
import { useCallback, useEffect, useRef, useState } from "react";
import cx from "classnames";

export default function PortfolioView() {
  const [activeSection, setActiveSection] = useState<string>("about"); // Default to the first section
  const [comingSection, setComingSection] = useState<string>("about");

  const contentDivRef = useRef<HTMLElement>(null);

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
  }, []);
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

  // The following codes works in case of scroll the normal window element.
  // const handleScroll = useCallback(() => {
  //   const sections = [
  //     "about",
  //     "skill",
  //     "experience",
  //     "project",
  //     "blog",
  //     "education",
  //     "fun_points",
  //     "contact",
  //   ];

  //   // Get the current scroll position
  //   const scrollY = window.scrollY;

  //   // Calculate which section is currently in view
  //   const sectionInView = sections.find((section) => {
  //     const element = document.getElementById(section);
  //     if (element) {
  //       const elementHeight = element.offsetHeight; // or clientHeight
  //       const elementTop = element.offsetTop;
  //       return scrollY >= elementTop && scrollY < elementTop + elementHeight;
  //     }
  //     return false;
  //   });

  //   // Update the active section
  //   if (sectionInView) {
  //     setActiveSection(sectionInView);
  //   }
  //   console.log("activeSection", activeSection);
  // }, [activeSection]);

  // Add an event listener to handle scroll events
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [handleScroll]);

  return (
    <div className="pl-20 w-full flex gap-10">
      {/* Sidebar */}
      <div
        className={cx(
          "w-96 min-w-96 h-screen basis-1/4 sticky top-0 left-0",
          " bg-slate-200 dark:bg-slate-900 transition-[background-color] duration-700"
        )}
      >
        <div className="w-full h-full px-10 pt-24 pb-16 flex flex-col gap-8 items-center">
          {/* Avatar */}
          <div className="w-3/4 relative aspect-square rounded-full overflow-hidden">
            <Image
              src="/yola-avatar.JPG"
              alt="yola-avatar"
              fill
              className="object-cover"
            ></Image>
          </div>
          {/* Info */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-semibold text-2xl">Yola Liang</h1>
            <span className="text-cerulean-400 dark:text-brick-400 transition-colors duration-700">
              <a href="">yolanda.y.liang@gmail.com</a>
            </span>
          </div>
          {/* Side menu */}
          <SideMenuTabs activeSection={activeSection} />
          {/* Copyright */}
          <div>
            <p className="text-center text-sm text-slate-400 dark:text-slate-700 transition-colors duration-700">
              Copyright © 2023 Yola LIANG. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      {/* Content */}
      <div
        ref={contentDivRef as React.MutableRefObject<HTMLDivElement>}
        className="h-screen basis-3/4 relative overflow-y-scroll scroll-smooth"
        onScroll={handleScroll}
        // style={{ scrollbarWidth: "none" }}
      >
        <div className="pr-20 relative flex flex-col gap-12">
          {/* About me */}
          <section id="about" className={cx("flex flex-col gap-4 snap-start")}>
            {/* <SectionHeaderAndDesc index={0} /> */}
            {/* <SectionHeaderAndDesc name={SECTION_HEADER_AND_DESC_ITEMS[0].name} headerText={.headerText} desc={} /> */}
            <SectionHeaderAndDesc
              inView={checkInView("about")}
              {...SECTION_HEADER_AND_DESC_ITEMS[0]}
            />
            <PersonalityView inView={checkInView("about")} />
          </section>
          {/* Quote 1 */}
          <div
            id="quote1"
            className={cx(
              "-mb-20 mt-4 p-10 relative bg-fixed bg-cover bg-[url('/bg-1.jpg')]"
            )}
          >
            <div className="w-full h-full absolute top-0 left-0 bg-slate-950 opacity-30"></div>
            <p
              className={cx(
                "relative z-10 font-serif font-bold text-4xl tracking-wider leading-loose",
                "text-white dark:text-white transition-colors duration-700"
              )}
            >
              {`I'm absolutely enthralled by the world of code - it's truly exhilarating!`}
            </p>
          </div>
          {/* SKill */}
          <section id="skill" className="flex flex-col gap-4 snap-start">
            <SectionHeaderAndDesc
              inView={checkInView("skill")}
              {...SECTION_HEADER_AND_DESC_ITEMS[1]}
            />
            <TechStacksView inView={checkInView("skill")} />
          </section>
          {/* Experience */}
          <section id="experience" className="flex flex-col gap-4 snap-start">
            <SectionHeaderAndDesc
              inView={checkInView("experience")}
              {...SECTION_HEADER_AND_DESC_ITEMS[2]}
            />
            <CareerExperienceView inView={checkInView("experience")} />
          </section>
          {/* Project */}
          <section id="project" className="flex flex-col gap-4 snap-start">
            <SectionHeaderAndDesc
              inView={checkInView("project")}
              {...SECTION_HEADER_AND_DESC_ITEMS[3]}
            />
            <ProjectsView inView={checkInView("project")} />
          </section>
          {/* Quote 2 */}
          <div
            id="quote2"
            className={cx(
              "-mb-20 mt-4 p-10 relative bg-fixed bg-cover bg-[url('/bg-1.jpg')]"
            )}
          >
            <div className="w-full h-full absolute top-0 left-0 bg-slate-950 opacity-30"></div>
            <p
              className={cx(
                "relative z-10 font-serif font-bold text-4xl tracking-wider leading-loose",
                "text-white dark:text-white transition-colors duration-700"
              )}
            >
              Keep coding, keep reflecting. <br />
              The journey is as thrilling as the destination!
            </p>
          </div>
          {/* Blog */}
          <section id="blog" className="flex flex-col gap-4 snap-start">
            <SectionHeaderAndDesc
              inView={checkInView("blog")}
              {...SECTION_HEADER_AND_DESC_ITEMS[4]}
            />
            <BlogsView inView={checkInView("blog")} />
          </section>
          {/* Education */}
          <section id="education" className="flex flex-col gap-4 snap-start">
            <SectionHeaderAndDesc
              inView={checkInView("education")}
              {...SECTION_HEADER_AND_DESC_ITEMS[5]}
            />
            <EducationView inView={checkInView("education")} />
          </section>
          {/* Fun points */}
          <section id="fun_points" className="flex flex-col gap-4 snap-start">
            <SectionHeaderAndDesc
              inView={checkInView("fun_points")}
              {...SECTION_HEADER_AND_DESC_ITEMS[6]}
            />
            <FunFactView inView={checkInView("fun_points")} />
          </section>
          {/* Contact */}
          <section
            id="contact"
            className="pb-20 flex flex-col gap-4 snap-start"
          >
            <SectionHeaderAndDesc
              inView={checkInView("contact")}
              {...SECTION_HEADER_AND_DESC_ITEMS[7]}
            />
            <ContactMeView inView={checkInView("contact")} />
          </section>
        </div>
      </div>
    </div>
  );
}
