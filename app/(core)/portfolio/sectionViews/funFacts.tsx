import Image from "next/image";
export default function FunFactView() {
  return (
    <div className="w-full aspect-[2/1] -mb-20 flex">
      <div className="w-1/2 h-full relative overflow-hidden">
        <Image
          src="/yola-funFact01.jpg"
          alt="brand-avatar"
          fill
          className="object-cover"
        ></Image>
      </div>
      <div className="w-1/2 h-full flex flex-wrap">
        <div className="w-1/2 bg-blue-50 dark:bg-brick-100 transition-colors duration-700"></div>
        <div className="w-1/2 bg-blue-200 dark:bg-brick-200 transition-colors duration-700"></div>
        <div className="w-1/2 bg-blue-300 dark:bg-brick-300 transition-colors duration-700"></div>
        <div className="w-1/2 bg-blue-500 dark:bg-brick-500 transition-colors duration-700"></div>
      </div>
    </div>
  );
}
