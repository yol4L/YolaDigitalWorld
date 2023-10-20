import Image from "next/image";
import { DocumentIcon } from "./components/Icons/svg";
// import cx from 'classnames';

export default function Home() {
  return (
    <main className="px-20 flex flex-col font-sans">
      <div className="h-screen flex flex-col">
        <nav className="sticky top-0 py-5 flex items-center justify-between">
          <div className="relative flex items-center gap-2">
            <Image
              src="yola-brand-avatar.svg"
              alt="brand-avatar"
              width={30}
              height={30}
            />
            <span>Yola&apos;s World</span>
          </div>
          <div className="flex flex-nowrap items-center gap-10">
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
        <div className="min-h-0 grow px-20 w-full flex justify-between">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <button
              type="button"
              className="w-auto px-6 py-4 self-start inline-flex items-center gap-2 rounded-2xl bg-neutral-200"
            >
              <DocumentIcon />
              <span className="font-semibold text-xl tracking-wide text-ocean-500">
                DOWNLOAD MY RESUME
              </span>
            </button>
          </div>
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
      <div className="mt-10 flex flex-nowrap gap-10">
        <div className="w-96 min-w-96 h-screen bg-slate-200"></div>
        <div className="w-full">
          <section>
            <h2>ABOUT ME</h2>
            <h1>WHO AM I</h1>
            <p>
              <b>Hi, I&apos;m Yola Liang.</b> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <br />
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
