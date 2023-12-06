export default function PageTagView({ tagName }: { tagName: string }) {
  return (
    <div className="z-10 flex items-center gap-3">
      <div className="flex items-center gap-2 animate-slideRight">
        <div className="w-2 h-0.5 bg-rose-400 dark:bg-brick-300"></div>
        <div className="w-2 h-0.5 bg-rose-400 dark:bg-brick-300"></div>
        <div className="w-10 h-0.5 bg-rose-400 dark:bg-brick-300"></div>
      </div>
      <span className="text-base sm:text-lg md:text-xl tracking-widest text-cerulean-400 dark:text-brick-300 animate-slideLeft">
        {tagName.toUpperCase()}
      </span>
    </div>
  );
}
