import Image from "next/image";
import {
  DocumentIcon,
  FourPointedStarIcon,
  NoteIcon,
} from "./components/Icons/svg";
// import cx from 'classnames';

export default function Home() {
  return (
    <main className="h-screen relative flex flex-col font-sans">
      {/* Navigation bar */}
      <nav className="px-20 w-full py-3 fixed top-0 z-10 flex items-center justify-between bg-white border-b border-neutral-50">
        <div className="relative flex items-center gap-2">
          <Image
            src="yola-brand-avatar.svg"
            alt="brand-avatar"
            width={30}
            height={30}
          />
          <span>Yola&apos;s World</span>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-10">
            <span>
              <a href="/">HOME</a>
            </span>
            <span>
              <a href="/recent-work">WORK</a>
            </span>
            <span>
              <a href="/blog">BLOG</a>
            </span>
            <span>
              <a href="/contact">CONTACT</a>
            </span>
          </div>
          <div className="relative">
            <Image
              src="/dark-mode.png"
              alt="brand-avatar"
              width={20}
              height={20}
            />
          </div>
        </div>
      </nav>
      <div className="px-20 flex flex-col">
        {/* Home */}
        <div className="w-full h-screen flex flex-col">
          <div className="min-h-0 grow px-20 w-full flex justify-between">
            {/* Welcome info */}
            <div className="w-1/2 flex flex-col justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-0.5 bg-pink-400"></div>
                <div className="w-2 h-0.5 bg-pink-400"></div>
                <div className="w-12 h-0.5 bg-pink-400"></div>
                <span className="text-2xl tracking-wide text-cerulean-400">
                  ABOUT
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="font-serif font-bold text-6xl text-ocean-500">
                  Hi, I&apos;m Yola
                </h1>
                <p className="text-xl text-neutral-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <button
                type="button"
                className="w-auto px-6 py-4 self-start inline-flex items-center gap-2 rounded-2xl bg-neutral-200"
              >
                <DocumentIcon className="text-ocean-500" />
                <span className="font-semibold text-xl tracking-wide text-ocean-500">
                  DOWNLOAD MY RESUME
                </span>
              </button>
            </div>
            {/* Photo */}
            <div className="relative w-1/3">
              <Image
                src="/yola-photo.png"
                alt="yola-photo"
                fill
                className="object-cover overflow-visible"
              ></Image>
            </div>
          </div>
        </div>
        {/* Portfolio */}
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
                <h1 className="font-serif font-semibold text-2xl ">
                  Yola Liang
                </h1>
                <span className="text-cerulean-400">
                  <a href="">yolanda.y.liang@gmail.com</a>
                </span>
              </div>
              {/* Side menu */}
              <div className="grow flex flex-col justify-between items-center">
                <span className="text-cerulean-500 tracking-wider border-b border-cerulean-500">
                  <a href="">ABOUT</a>
                </span>
                <span className="text-neutral-600 tracking-wider">
                  <a href="">SKILLS</a>
                </span>
                <span className="text-neutral-600 tracking-wider">
                  <a href="">EXPERIENCE</a>
                </span>
                <span className="text-neutral-600 tracking-wider">
                  <a href="">PROJECT</a>
                </span>
                <span className="text-neutral-600 tracking-wider">
                  <a href="">BLOG</a>
                </span>
                <span className="text-neutral-600 tracking-wider">
                  <a href="">EDUCATION</a>
                </span>
                <span className="text-neutral-600 tracking-wider">
                  <a href="">FUN POINTS</a>
                </span>
                <span className="text-neutral-600 tracking-wider">
                  <a href="">CONTACT</a>
                </span>
              </div>
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
              <div className="my-6 flex flex-col gap-6">
                <h2 className="text-neutral-400 tracking-widest">ABOUT ME</h2>
                <h1 className="font-serif font-medium text-xl text-neutral-800 tracking-widest">
                  WHO AM I
                </h1>
                <div className="flex flex-col gap-4">
                  <p className="text-neutral-800">
                    <b>Hi, I&apos;m Yola Liang.</b> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                  <p className="text-neutral-800">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/4 aspect-square px-4 py-6 flex flex-col justify-top gap-2 border-b-2 border-cerulean-400 shadow-xl">
                  <NoteIcon className="text-cerulean-500" />
                  <h3 className="font-serif text-sm">Highly Motivated</h3>
                  <p className="text-xs text-neutral-600">
                    Lorem ipsum dolor sit amet consectetur adipi elit.
                    adipisicing elit.
                  </p>
                </div>
                <div className="w-1/4 aspect-square px-4 py-6 flex flex-col justify-top gap-2 border-b-2 border-cerulean-400 shadow-xl">
                  <NoteIcon className="text-cerulean-500" />
                  <h3 className="font-serif text-sm">Result Oriented</h3>
                  <p className="text-xs text-neutral-600">
                    Lorem ipsum dolor sit amet consectetur adipi elit.
                    adipisicing elit.
                  </p>
                </div>
                <div className="w-1/4 aspect-square px-4 py-6 flex flex-col justify-top gap-2 border-b-2 border-cerulean-400 shadow-xl">
                  <NoteIcon className="text-cerulean-500" />
                  <h3 className="font-serif text-sm">Fast learner</h3>
                  <p className="text-xs text-neutral-600">
                    Lorem ipsum dolor sit amet consectetur adipi elit.
                    adipisicing elit.
                  </p>
                </div>
                <div className="w-1/4 aspect-square px-4 py-6 flex flex-col justify-top gap-2 border-b-2 border-cerulean-400 shadow-xl">
                  <NoteIcon className="text-cerulean-500" />
                  <h3 className="font-serif text-sm">Attention to Details</h3>
                  <p className="text-xs text-neutral-600">
                    Lorem ipsum dolor sit amet consectetur adipi elit.
                    adipisicing elit.
                  </p>
                </div>
              </div>
            </section>
            <div className="p-6 bg-[#F6C050]">
              <p className="font-serif text-2xl tracking-widest">
                I am passionate about the code world, <br />
                especially the front-end engineering, so appealing.
              </p>
            </div>
            {/* SKills */}
            <section className="flex flex-col gap-4">
              <div className="my-6 flex flex-col gap-6">
                <h2 className="text-neutral-400 tracking-widest">MY SKILLS</h2>
                <h1 className="font-serif font-medium text-xl text-neutral-800 tracking-widest">
                  TECH STACKS I&apos;M GOOD AT
                </h1>
                <div className="flex flex-col gap-4">
                  <p className="text-neutral-800">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex gap-6">
                  <div className="w-1/2 p-4 shadow-md flex">
                    <div className="p-2 pr-4 flex items-center border-r border-cerulean-400">
                      <NoteIcon
                        fontSize="large"
                        className="w-16 h-16 text-cerulean-500"
                      />
                    </div>
                    <div className="p-2 pl-4 flex flex-col gap-2">
                      <h3 className="font-serif text-sm tracking-widest">
                        FRAMEWORK
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-cerulean-400">
                          <span className="text-xs text-white tracking-wider">
                            React
                          </span>
                        </div>
                        <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-[#F3B4BB]">
                          <span className="text-xs text-white tracking-wider">
                            Next.js
                          </span>
                        </div>
                        <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-[#F6C050]">
                          <span className="text-xs text-white tracking-wider">
                            Redux
                          </span>
                        </div>
                        <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-[#6878B1]">
                          <span className="text-xs text-white tracking-wider">
                            TailwindCSS
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 p-4 shadow-md flex">
                    <div className="p-2 pr-4 flex items-center border-r border-cerulean-400">
                      <NoteIcon
                        fontSize="large"
                        className="w-16 h-16 text-cerulean-500"
                      />
                    </div>
                    <div className="p-2 pl-4 flex flex-col gap-2">
                      <h3 className="font-serif text-sm tracking-widest">
                        FRONT-END
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-cerulean-400">
                          <span className="text-xs text-white tracking-wider">
                            HTML
                          </span>
                        </div>
                        <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-[#F3B4BB]">
                          <span className="text-xs text-white tracking-wider">
                            CSS
                          </span>
                        </div>
                        <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-[#F6C050]">
                          <span className="text-xs text-white tracking-wider">
                            JavaScript
                          </span>
                        </div>
                        <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-[#6878B1]">
                          <span className="text-xs text-white tracking-wider">
                            TypeScript
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-1/2 p-4 shadow-md flex">
                    <div className="p-2 pr-4 flex items-center border-r border-cerulean-400">
                      <NoteIcon
                        fontSize="large"
                        className="w-16 h-16 text-cerulean-500"
                      />
                    </div>
                    <div className="p-2 pl-4 flex flex-col gap-2">
                      <h3 className="font-serif text-sm tracking-widest">
                        DATABASE
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-cerulean-400">
                          <span className="text-xs text-white tracking-wider">
                            MongoDB
                          </span>
                        </div>
                        <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-[#F3B4BB]">
                          <span className="text-xs text-white tracking-wider">
                            GraphQL
                          </span>
                        </div>
                        <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-[#F6C050]">
                          <span className="text-xs text-white tracking-wider">
                            MySQL
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 p-4 shadow-md flex">
                    <div className="p-2 pr-4 flex items-center border-r border-cerulean-400">
                      <NoteIcon
                        fontSize="large"
                        className="w-16 h-16 text-cerulean-500"
                      />
                    </div>
                    <div className="p-2 pl-4 flex flex-col gap-2">
                      <h3 className="font-serif text-sm tracking-widest">
                        OTHERS
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-cerulean-400">
                          <span className="text-xs text-white tracking-wider">
                            Git
                          </span>
                        </div>
                        <div className="px-3 py-0.5 flex items-center justify-start rounded-md bg-[#F3B4BB]">
                          <span className="text-xs text-white tracking-wider">
                            Node.js
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Experience */}
            <section className="flex flex-col gap-4">
              <div className="my-6 flex flex-col gap-6">
                <h2 className="text-neutral-400 tracking-widest">WORK</h2>
                <h1 className="font-serif font-medium text-xl text-neutral-800 tracking-widest">
                  CAREER EXPERIENCE
                </h1>
                <div className="flex flex-col gap-4">
                  <p className="text-neutral-800">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {/* Job title, including icon, company, position, period, etc. */}
                <div className="flex items-center gap-4">
                  <div className="w-1/12 shrink-0 flex justify-center items-center">
                    <FourPointedStarIcon fontSize="large" />
                  </div>
                  <div className="w-11/12">
                    <h3 className="font-serif tracking-widest">
                      MOCHI LABS, CANBERRA
                    </h3>
                    <p className="text-sm italic">
                      <span className="text-neutral-800 mr-4">
                        Internship, Front-end Developer
                      </span>
                      <span className="text-neutral-300">
                        July 2023 - Oct 2023
                      </span>
                    </p>
                  </div>
                </div>
                {/* Job duties */}
                <div className="h-full flex items-center gap-4">
                  <div className="w-1/12 h-full shrink-0 relative">
                    <div className="w-1/2 h-full absolute border-r border-neutral-400"></div>
                  </div>
                  <div className="w-11/12 my-2 p-6 rounded-md bg-neutral-100">
                    <ul className="px-6 list-disc text-sm flex flex-col gap-2">
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </li>
                      <li>
                        Esse deserunt ad nemo natus quasi assumenda et?
                        Repudiandae.
                      </li>
                      <li>
                        Velit impedit obcaecati inventore doloremque
                        consequuntur cumque atque maxime quas fugiat ducimus
                        eveniet.
                      </li>
                      <li>
                        Consequuntur cumque atque maxime quas fugiat ducimus
                        eveniet.
                      </li>
                      <li>Atque maxime quas fugiat ducimus eveniet.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {/* Job title, including icon, company, position, period, etc. */}
                <div className="flex items-center gap-4">
                  <div className="w-1/12 shrink-0 flex justify-center items-center">
                    <FourPointedStarIcon fontSize="large" />
                  </div>
                  <div className="w-11/12">
                    <h3 className="font-serif tracking-widest">
                      YELPCAMP PROJECT
                    </h3>
                    <p className="text-sm italic">
                      <span className="text-neutral-800 mr-4">
                        Personal Project, Full stack Developer
                      </span>
                      <span className="text-neutral-300">
                        Sep 2022 - June 2023
                      </span>
                    </p>
                  </div>
                </div>
                {/* Job duties */}
                <div className="h-full flex items-center gap-4">
                  <div className="w-1/12 h-full shrink-0 relative">
                    <div className="w-1/2 h-full absolute border-r border-neutral-400"></div>
                  </div>
                  <div className="w-11/12 my-2 p-6 rounded-md bg-neutral-100">
                    <ul className="px-6 list-disc text-sm flex flex-col gap-2">
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </li>
                      <li>
                        Esse deserunt ad nemo natus quasi assumenda et?
                        Repudiandae.
                      </li>
                      <li>
                        Velit impedit obcaecati inventore doloremque
                        consequuntur cumque atque maxime quas fugiat ducimus
                        eveniet.
                      </li>
                      <li>
                        Consequuntur cumque atque maxime quas fugiat ducimus
                        eveniet.
                      </li>
                      <li>Atque maxime quas fugiat ducimus eveniet.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            {/* Project */}
            <section className="flex flex-col gap-4">
              <div className="my-6 flex flex-col gap-6">
                <h2 className="text-neutral-400 tracking-widest">PROJECTS</h2>
                <h1 className="font-serif font-medium text-xl text-neutral-800 tracking-widest">
                  SOME OF MY RECENT WORK
                </h1>
                <div className="flex flex-col gap-4">
                  <p className="text-neutral-800">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-1/3 aspect-square flex flex-col rounded-2xl shadow-lg overflow-hidden">
                  <div className="w-full h-3/5 bg-neutral-300"></div>
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="font-serif tracking-widest">YELPCAMP</h3>
                    <p className="text-sm italic text-neutral-300">
                      React, Node.js, MongoDB, Express (MERN)
                    </p>
                    <p className="text-sm text-neutral-800">
                      A full-stack website project where users can create and
                      review campgrounds.
                    </p>
                  </div>
                </div>
                <div className="w-1/3 aspect-square flex flex-col rounded-2xl shadow-lg overflow-hidden">
                  <div className="w-full h-3/5 bg-neutral-300"></div>
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="font-serif tracking-widest">NEWSFEED</h3>
                    <p className="text-sm italic text-neutral-300">
                      React, Node.js, MongoDB, Express (MERN)
                    </p>
                    <p className="text-sm text-neutral-800">
                      A full-stack website project where users can create and
                      review campgrounds.
                    </p>
                  </div>
                </div>
                <div className="w-1/3 aspect-square flex flex-col rounded-2xl shadow-lg overflow-hidden">
                  <div className="w-full h-3/5 bg-neutral-300"></div>
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="font-serif tracking-widest">ZOOMBIES</h3>
                    <p className="text-sm italic text-neutral-300">
                      React, Node.js, MongoDB, Express (MERN)
                    </p>
                    <p className="text-sm text-neutral-800">
                      A full-stack website project where users can create and
                      review campgrounds.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <div className="p-6 bg-[#F6C050]">
              <p className="font-serif text-2xl tracking-widest">
                Keep coding... <br />
                Keep Reflective...
              </p>
            </div>
            {/* Blog */}
            <section className="flex flex-col gap-4">
              <div className="my-6 flex flex-col gap-6">
                <h2 className="text-neutral-400 tracking-widest">BLOG</h2>
                <h1 className="font-serif font-medium text-xl text-neutral-800 tracking-widest">
                  RECENT BLOG
                </h1>
                <div className="flex flex-col gap-4">
                  <p className="text-neutral-800">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-1/3 flex flex-col gap-4">
                  <div className="w-full aspect-video bg-neutral-300"></div>
                  <p className="text-sm tracking-widest text-neutral-400">
                    APRIL 14, 2023 | WEB DESIGN
                  </p>
                  <p className="text-sm tracking-wider text-neutral-800">
                    THIS IS THE TITLE MAIN TITLE
                  </p>
                </div>
                <div className="w-1/3 flex flex-col gap-4">
                  <div className="w-full aspect-video bg-neutral-300"></div>
                  <p className="text-sm tracking-widest text-neutral-400">
                    APRIL 14, 2023 | WEB DESIGN
                  </p>
                  <p className="text-sm tracking-wider text-neutral-800">
                    THIS IS THE TITLE MAIN TITLE
                  </p>
                </div>
                <div className="w-1/3 flex flex-col gap-4">
                  <div className="w-full aspect-video bg-neutral-300"></div>
                  <p className="text-sm tracking-widest text-neutral-400">
                    APRIL 14, 2023 | WEB DESIGN
                  </p>
                  <p className="text-sm tracking-wider text-neutral-800">
                    THIS IS THE TITLE MAIN TITLE
                  </p>
                </div>
              </div>
            </section>
            {/* Education */}
            <section className="flex flex-col gap-4">
              <div className="my-6 flex flex-col gap-6">
                <h2 className="text-neutral-400 tracking-widest">EDUCATION</h2>
                <h1 className="font-serif font-medium text-xl text-neutral-800 tracking-widest">
                  EDUCATION
                </h1>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <div className="px-6 py-3 flex items-center justify-between border-neutral-200 bg-cerulean-500 ">
                    <span className="tracking-widest text-white">
                      MASTER DEGREE GRAPHIC DESIGN
                    </span>
                    <button
                      type="button"
                      className="inline-flex justify-center items-center"
                    >
                      <DocumentIcon className="text-white" />
                    </button>
                  </div>
                  <div className="p-6 border border-neutral-200">
                    <p className="text-neutral-800">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptate temporibus tenetur unde officiis minima quos
                      cupiditate mollitia quod sequi sint. <br /> Voluptatum
                      eum, nulla illum dicta recusandae beatae nihil magnam rem!
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="px-6 py-3 flex items-center justify-between border-neutral-200 bg-neutral-200 ">
                    <span className="tracking-widest text-neutral-800">
                      MASTER DEGREE GRAPHIC DESIGN
                    </span>
                    <button
                      type="button"
                      className="inline-flex justify-center items-center"
                    >
                      <DocumentIcon className="text-white" />
                    </button>
                  </div>
                  <div className="p-6 border border-neutral-100">
                    <p className="text-neutral-800">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptate temporibus tenetur unde officiis minima quos
                      cupiditate mollitia quod sequi sint. <br /> Voluptatum
                      eum, nulla illum dicta recusandae beatae nihil magnam rem!
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="px-6 py-3 flex items-center justify-between border-neutral-200 bg-neutral-200 ">
                    <span className="tracking-widest text-neutral-800">
                      MASTER DEGREE GRAPHIC DESIGN
                    </span>
                    <button
                      type="button"
                      className="inline-flex justify-center items-center"
                    >
                      <DocumentIcon className="text-white" />
                    </button>
                  </div>
                  <div className="p-6 border border-neutral-100">
                    <p className="text-neutral-800">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptate temporibus tenetur unde officiis minima quos
                      cupiditate mollitia quod sequi sint. <br /> Voluptatum
                      eum, nulla illum dicta recusandae beatae nihil magnam rem!
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Fun points */}
            <section className="flex flex-col gap-4">
              <div className="my-6 flex flex-col gap-6">
                <h2 className="text-neutral-400 tracking-widest">FUN POINTS</h2>
                <h1 className="font-serif font-medium text-xl text-neutral-800 tracking-widest">
                  OTHER ASPECT OF ME
                </h1>
                <div className="flex flex-col gap-4">
                  <p className="text-neutral-800">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </section>
            {/* Contact */}
            <section className="flex flex-col gap-4">
              <div className="my-6 flex flex-col gap-6">
                <h2 className="text-neutral-400 tracking-widest">CONTACT</h2>
                <h1 className="font-serif font-medium text-xl text-neutral-800 tracking-widest">
                  CONTACT ME PLEASE
                </h1>
                <div className="flex flex-col gap-4">
                  <p className="text-neutral-800">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
