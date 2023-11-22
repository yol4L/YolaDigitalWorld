import Link from "next/link";
import cx from "classnames";
import { ELSE_ITEMS, PERSONAL_INFO_ITEMS } from "@/app/data";

export default function ContactMeView({
  inView,
  scrollingUp,
}: {
  inView: boolean;
  scrollingUp: boolean;
}) {
  return (
    <div className="flex gap-20">
      <div className="w-1/2 flex flex-col gap-10">
        {/* Personal Info */}
        <div
          className={cx(
            "flex flex-col gap-8",
            inView && !scrollingUp && "animate-slideRight"
          )}
        >
          <span
            className={cx(
              "py-2 border-b font-medium text-ocean-500",
              "border-slate-200 dark:border-slate-500 transition-colors duration-700"
            )}
          >
            Personal
          </span>
          <div className="flex flex-col gap-4">
            {PERSONAL_INFO_ITEMS.map(({ id, icon: Icon, details }) => {
              return (
                <div key={id} className="flex items-center gap-4">
                  <div
                    className={cx(
                      "p-4 rounded-lg flex justify-center items-center",
                      "bg-slate-200 dark:bg-slate-900 transition-colors duration-700"
                    )}
                  >
                    <Icon className="text-ocean-500 dark:text-slate-500 transition-colors duration-700" />
                  </div>
                  <div>
                    <span>{details}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Elsewhere */}
        <div
          className={cx(
            "flex flex-col gap-8",
            inView && !scrollingUp && "animate-slideRight"
          )}
          style={{ animationDelay: "0.5s" }}
        >
          <span
            className={cx(
              "py-2 border-b font-medium text-ocean-500",
              "border-slate-200 dark:border-slate-500 transition-colors duration-700"
            )}
          >
            Elsewhere
          </span>
          <div className="flex flex-col gap-4">
            {ELSE_ITEMS.map(({ id, icon: Icon, path, info }) => {
              return (
                <Link
                  key={id}
                  href={path}
                  className="py-1 flex items-center hover:text-cerulean-400 dark:hover:text-brick-300"
                >
                  <Icon fontSize="small" className="mx-2" />
                  <span>{info}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* Message form */}
      <form
        className={cx(
          "w-1/2 py-2 flex flex-col gap-8",
          inView && !scrollingUp && "animate-slideLeft"
        )}
      >
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium text-ocean-500">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className={cx(
              "p-2 bg-transparent rounded-md border transition-colors duration-700",
              "border-slate-200 dark:border-slate-500",
              "focus:outline-ocean-500"
            )}
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
            className={cx(
              "p-2 bg-transparent rounded-md border transition-colors duration-700",
              "border-slate-200 dark:border-slate-500",
              "focus:outline-ocean-500"
            )}
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
            className={cx(
              "p-2 bg-transparent rounded-md border transition-colors duration-700",
              "border-slate-200 dark:border-slate-500",
              "focus:outline-ocean-500"
            )}
          ></textarea>
        </div>
        <button
          type="button"
          className={cx(
            "w-auto px-8 py-4 self-start rounded-full font-medium tracking-widest transition-colors duration-700",
            "bg-slate-300 dark:bg-ocean-500",
            "text-ocean-500 dark:text-slate-100"
          )}
        >
          <span>SUBMIT MESSAGE</span>
        </button>
      </form>
    </div>
  );
}
