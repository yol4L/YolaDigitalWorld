import { DocumentIcon } from "@/app/components/Icons/svg";
import Link from "next/link";

export default function ContactMeView() {
  return (
    <div className="flex gap-20">
      <div className="w-1/2 flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <h3 className="py-2 border-b border-neutral-200 font-medium text-ocean-500">
            Personal
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-lg flex justify-center items-center bg-neutral-100">
                <DocumentIcon className="text-ocean-500" />
              </div>
              <div>
                <span className="text-neutral-800">
                  yolanda.y.liang@gmail.com
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-lg flex justify-center items-center bg-neutral-100">
                <DocumentIcon className="text-ocean-500" />
              </div>
              <div>
                <span className="text-neutral-800">BELCONNEN ACT 2617</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-lg flex justify-center items-center bg-neutral-100">
                <DocumentIcon className="text-ocean-500" />
              </div>
              <div>
                <span className="text-neutral-800">+61 0473042891</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="py-2 border-b border-neutral-200 font-medium text-ocean-500">
            Elsewhere
          </h3>
          <div className="flex flex-col gap-4 text-neutral-800">
            <Link href="/">Download my CV as PDF format</Link>
            <Link href="/">Download my CV as DOC format</Link>
            <Link href="/">View my portfolio on LinkedIn</Link>
            <Link href="/">Back to Home Page</Link>
          </div>
        </div>
      </div>
      <form className="w-1/2 py-2 flex flex-col gap-8">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium text-ocean-500">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="p-2 bg-transparent rounded-md border border-neutral-200 focus:outline-ocean-500"
          />
        </div>
        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium text-ocean-500">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="p-2 bg-transparent rounded-md border border-neutral-200 focus:outline-ocean-500"
          />
        </div>
        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-medium text-ocean-500">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            className="p-2 bg-transparent rounded-md border border-neutral-200 focus:outline-ocean-500"
          ></textarea>
        </div>
        <button
          type="button"
          className="w-auto px-8 py-4 self-start rounded-full bg-neutral-200 font-medium tracking-widest text-ocean-500"
        >
          <span>SUBMIT MESSAGE</span>
        </button>
      </form>
    </div>
  );
}
