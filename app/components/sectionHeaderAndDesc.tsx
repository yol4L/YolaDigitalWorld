// return (
//  <S name={Section_Header_And_Desc_Items[index].name} ... />
// )
// function S({ name, header, desc } : { name: string; header: string; desc: string}) {}
// pure component, pure function, 幂等

import cx from "classnames";

export default function SectionHeaderAndDesc({
  name,
  headerText,
  description,
  inView,
}: {
  name: string;
  headerText: string;
  description: string[];
  inView: boolean;
}) {
  return (
    <div className="mt-28 mb-6 flex flex-col gap-6">
      <span
        className={cx(
          "tracking-widest text-slate-400 dark:text-brick-200",
          inView && "animate-slideLeft"
        )}
      >
        {name}
      </span>
      <h1
        className={cx(
          "font-semibold text-xl tracking-widest",
          inView && "animate-slideRight"
        )}
      >
        {headerText}
      </h1>
      {description.length !== 0 && (
        <div className="flex flex-col gap-4">
          {description.map((paragraph) => {
            return (
              <p
                key={paragraph.slice(0, 8)}
                dangerouslySetInnerHTML={{ __html: paragraph }}
                className={cx("text-justify", inView && "animate-slideLeft")}
              ></p>
            );
          })}
        </div>
      )}
    </div>
  );
}
