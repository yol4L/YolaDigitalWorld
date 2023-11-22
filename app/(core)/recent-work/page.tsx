"use client";

import React, { useEffect, useState, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

import PageTagView from "@/app/components/Tags/pageTag";
import TopNavView from "@/app/components/Tabs/topNav";
import CarouselView from "./carousel";

import CloseIcon from "@mui/icons-material/Close";
import { BACKGROUND_COLORS, RECENT_WORK } from "@/app/data";

function getBgColor() {
  const i = Math.floor(Math.random() * BACKGROUND_COLORS.length);
  const bgColor = BACKGROUND_COLORS[i];
  return bgColor;
}

export function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-50">
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-2/3 max-w-3xl mx-auto relative rounded-lg shadow-xl bg-slate-50">
          {children}
          <button
            className={cx(
              "p-1.5 absolute top-0 right-0 translate-x-[50%] translate-y-[-50%]",
              "inline-flex items-center justify-center rounded-full bg-slate-50 "
            )}
            onClick={onClose}
          >
            <CloseIcon fontSize="small" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function DemoModal({ index }: { index: number }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="">
      <button
        type="button"
        className={cx(
          "mt-2 inline-flex font-mono font-semibold",
          index % 2 === 0 ? "self-start" : "self-end"
        )}
        onClick={() => setModalOpen(true)}
      >
        <span>Take a Look →</span>
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <CarouselView />
      </Modal>
    </div>
  );
}

const TryLink = ({ index, linkRef }: { index: number; linkRef: string }) => {
  return (
    <Link href={linkRef}>
      <button
        type="button"
        className={cx(
          "mt-2 inline-flex font-mono font-semibold",
          index % 2 === 0 ? "self-start" : "self-end"
        )}
      >
        <span>Have a try →</span>
      </button>
    </Link>
  );
};

export default function RecentWorkPage() {
  const [colors, setColors] = useState<Record<string, string[]>>({});

  useEffect(() => {
    setColors(
      RECENT_WORK.reduce<Record<string, string[]>>((prev, curr) => {
        prev[curr.id] = new Array(curr.tech_stacks.length)
          .fill(0)
          .map(() => getBgColor());
        return prev;
      }, {})
    );
    // { "framework": ["c1", "c2",], "work": ["c3", "c4"], ...}
  }, [setColors]);

  return (
    <div>
      <TopNavView />
      <div className="px-36 py-28 flex flex-col">
        <PageTagView tagName={"Projects"} />
        <div className="my-6 flex flex-col gap-4">
          <h1 className="font-serif font-bold text-3xl tracking-widest text-ocean-500">
            RECENT WORK
          </h1>
          <p className="text-justify">
            {`Here are some of my recent work. You can dive into a visual showcase or browse through a variety of
            projects I've undertaken, from web applications and websites to design concepts.`}
          </p>
        </div>
        {/* Main */}
        <div className="my-6 flex flex-col gap-10">
          {RECENT_WORK.map(
            (
              { id, title, tech_stacks, detailed_desc, coverUrl, linkRef },
              i
            ) => {
              return (
                <div
                  key={id}
                  id={id}
                  className={cx(
                    "flex items-stretch gap-10",
                    i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  )}
                >
                  <div className="w-1/3 aspect-video flex-none relative overflow-hidden border border-slate-600">
                    <Image
                      src={coverUrl}
                      alt="brand-avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={cx(
                      "flex flex-col justify-center gap-2",
                      i % 2 === 0 ? "items-start " : "items-end"
                    )}
                  >
                    <h3 className="text-xl font-mono font-semibold tracking-widest">
                      {title.toUpperCase()}
                    </h3>
                    <p
                      className={cx(
                        "text-sm text-justify",
                        i % 2 === 0 ? "text-start" : "text-end"
                      )}
                    >
                      {detailed_desc}
                    </p>
                    <div
                      className={cx(
                        "flex flex-wrap gap-4",
                        i % 2 === 0 ? "justify-start" : "justify-end"
                      )}
                    >
                      {tech_stacks.map((stack, i) => {
                        return (
                          <div
                            key={stack.toString()}
                            className={cx(
                              "px-3 py-0.5 flex items-center rounded-md cursor-pointer"
                            )}
                            style={{ backgroundColor: (colors[id] ?? [])[i] }}
                          >
                            <span className="text-xs text-white tracking-wider">
                              {stack}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    {id === "newsfeed" ? (
                      <DemoModal index={i} />
                    ) : (
                      <TryLink index={i} linkRef={linkRef} />
                    )}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
