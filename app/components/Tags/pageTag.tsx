export default function PageTagView({ tagName }: { tagName: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-2 h-0.5 bg-pink-400"></div>
      <div className="w-2 h-0.5 bg-pink-400"></div>
      <div className="w-12 h-0.5 bg-pink-400"></div>
      <span className="text-xl tracking-widest text-cerulean-400">
        {tagName.toUpperCase()}
      </span>
    </div>
  );
}
