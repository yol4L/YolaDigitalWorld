"use client";

import Link from "next/link";
import cx from "classnames";
import { ELSE_ITEMS, PERSONAL_INFO_ITEMS } from "@/app/data";
import { useCallback, useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { PersonalInfoItem } from "@/app/types";
import ContactForm from "./contactForm";

const InfoModal = ({
  onClose,
  name,
  details,
}: {
  onClose: () => void;
  name: string;
  details: string;
}) => {
  return (
    <div
      className="w-full h-full fixed inset-0 flex items-center justify-center bg-slate-600 bg-opacity-50"
      onClick={onClose}
    >
      <div className="w-96 p-5 relative flex flex-col items-start gap-4 rounded-md bg-slate-50">
        <div className="w-full inline-flex items-center gap-2 border-b-slate-600">
          <CheckIcon className="text-cerulean-500" />
          <span className="font-serif text-lg font-semibold tracking-wider text-cerulean-500">
            Copied!
          </span>
          <span className="grow"></span>
          <div
            onClick={onClose}
            className="p-2 flex items-center justify-center rounded-full bg-slate-300 cursor-pointer"
          >
            <CloseIcon
              fontSize="small"
              className="w-4 h-4 text-slate-500 hover:text-slate-700"
            />
          </div>
        </div>
        <p className="w-full px-1 text-sm leading-6 text-gray-800">
          <span>{`Yola's ${name}: `}</span>
          <span className="font-semibold tracking-wider ">{details}</span>
          <span>{` has been copied to your clipboard!`}</span>
        </p>
        <button
          id="okButton"
          className="w-full px-4 py-2 mt-2 rounded-md shadow-sm font-medium text-slate-50 bg-cerulean-500 hover:bg-cerulean-700 transition-colors duration-500"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default function ContactMeView({
  inView,
  scrollingUp,
}: {
  inView: boolean;
  scrollingUp: boolean;
}) {
  const [currentItem, setCurrentItem] = useState<PersonalInfoItem | null>(null);
  const showModal = (item: PersonalInfoItem) => setCurrentItem(item);
  const hideModal = () => setCurrentItem(null);

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-5 md:gap-20 z-20 text-sm md:text-base">
      <div className="w-full sm:w-1/2 flex flex-col gap-10">
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
            {PERSONAL_INFO_ITEMS.map(({ id, name, icon: Icon, details }) => {
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
                    <span
                      className="cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigator.clipboard.writeText(details);
                        showModal({ id, name, icon: Icon, details });
                      }}
                    >
                      {details}
                    </span>
                  </div>
                  {currentItem && (
                    <InfoModal
                      onClose={hideModal}
                      name={currentItem.name}
                      details={currentItem.details}
                    />
                  )}
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
            {ELSE_ITEMS.map(
              ({ id, icon: Icon, path, info, isDownloadable }) => {
                if (isDownloadable) {
                  return (
                    <Link
                      key={id}
                      href={path}
                      download
                      target="_blank"
                      className="py-1 flex items-center hover:text-cerulean-400 dark:hover:text-brick-300"
                    >
                      <Icon fontSize="small" className="mx-2" />
                      <span>{info}</span>
                    </Link>
                  );
                } else {
                  return (
                    <Link
                      key={id}
                      href={id === "back_home" ? "/#home" : path}
                      target={id === "back_home" ? "" : "_blank"}
                      className="py-1 flex items-center hover:text-cerulean-400 dark:hover:text-brick-300"
                    >
                      <Icon fontSize="small" className="mx-2" />
                      <span>{info}</span>
                    </Link>
                  );
                }
              }
            )}
          </div>
        </div>
      </div>
      {/* Message form */}
      <ContactForm inView={inView} scrollingUp={scrollingUp} />
    </div>
  );
}
