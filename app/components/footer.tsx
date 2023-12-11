import cx from "classnames";

export default function FooterView() {
  return (
    <footer
      className={cx(
        "h-16 w-full relative flex items-center justify-center text-xs",
        "text-slate-500 border-0 transition-all duration-700",
        "bg-slate-100 dark:bg-slate-900",
        "border-t-slate-200, dark:border-t-slate-600"
      )}
    >
      <span>Copyright © 2023 Yola LIANG | Australia. All rights reserved.</span>
    </footer>
  );
}
