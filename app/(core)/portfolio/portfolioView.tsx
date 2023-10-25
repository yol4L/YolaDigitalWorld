import SideMenuTabs from "@/app/components/Tabs/sideMenuTabs";
import SectionHeaderAndDesc from "@/app/components/sectionHeaderAndDesc";
import Image from "next/image";
import PersonalityView from "./sectionViews/personality";
import TechStacksView from "./sectionViews/techStacks";
import CareerExperienceView from "./sectionViews/careerExperience";
import ProjectsView from "./sectionViews/projects";
import BlogsView from "./sectionViews/blogs";
import EducationView from "./sectionViews/education";
import { Section_Header_And_Desc_Items } from "./data";

export default function PortfolioView() {
  return (
    <div className="w-full flex gap-10">
      {/* Sidebar */}
      <div className="w-96 min-w-96 h-screen basis-1/4 sticky top-0 left-0 bg-slate-200">
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
            <h1 className="font-serif font-semibold text-2xl ">Yola Liang</h1>
            <span className="text-cerulean-400">
              <a href="">yolanda.y.liang@gmail.com</a>
            </span>
          </div>
          {/* Side menu */}
          <SideMenuTabs />
          {/* Copyright */}
          <div>
            <p className="text-center text-sm text-neutral-400">
              Copyright @2023. All rights reserved. By Yola.
            </p>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="py-28 basis-3/4 flex flex-col gap-12">
        {/* About me */}
        <section className="flex flex-col gap-4">
          {/* <SectionHeaderAndDesc index={0} /> */}
          <SectionHeaderAndDesc {...Section_Header_And_Desc_Items[0]} />
          {/* <SectionHeaderAndDesc name={Section_Header_And_Desc_Items[0].name} headerText={.headerText} desc={} /> */}
          <PersonalityView />
        </section>
        <div className="p-6 bg-[#F6C050]">
          <p className="font-serif text-2xl tracking-widest">
            I am passionate about the code world, <br />
            especially the front-end engineering, so appealing.
          </p>
        </div>
        {/* SKills */}
        <section className="flex flex-col gap-4">
          <SectionHeaderAndDesc {...Section_Header_And_Desc_Items[1]} />
          <TechStacksView />
        </section>
        {/* Experience */}
        <section className="flex flex-col gap-4">
          <SectionHeaderAndDesc {...Section_Header_And_Desc_Items[2]} />
          <CareerExperienceView />
        </section>
        {/* Project */}
        <section className="flex flex-col gap-4">
          <SectionHeaderAndDesc {...Section_Header_And_Desc_Items[3]} />
          <ProjectsView />
        </section>
        <div className="p-6 bg-[#F6C050]">
          <p className="font-serif text-2xl tracking-widest">
            Keep coding... <br />
            Keep Reflective...
          </p>
        </div>
        {/* Blog */}
        <section className="flex flex-col gap-4">
          <SectionHeaderAndDesc {...Section_Header_And_Desc_Items[4]} />
          <BlogsView />
        </section>
        {/* Education */}
        <section className="flex flex-col gap-4">
          <SectionHeaderAndDesc {...Section_Header_And_Desc_Items[5]} />
          <EducationView />
        </section>
        {/* Fun points */}
        <section className="flex flex-col gap-4">
          <SectionHeaderAndDesc {...Section_Header_And_Desc_Items[6]} />
        </section>
        {/* Contact */}
        <section className="flex flex-col gap-4">
          <SectionHeaderAndDesc {...Section_Header_And_Desc_Items[7]} />
        </section>
      </div>
    </div>
  );
}
