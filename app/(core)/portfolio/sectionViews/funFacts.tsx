import Image from "next/image";
export default function FunFactView() {
  return (
    <div className="w-full aspect-[2/1] flex">
      <div className="w-1/2 h-full relative overflow-hidden">
        <Image
          src="/yola-funFact01.jpg"
          alt="brand-avatar"
          fill
          className="object-cover"
        ></Image>
      </div>
      <div className="w-1/2 h-full flex flex-wrap">
        <div className="w-1/2 bg-blue-50"></div>
        <div className="w-1/2 bg-blue-200"></div>
        <div className="w-1/2 bg-blue-300"></div>
        <div className="w-1/2 bg-blue-500"></div>
      </div>
    </div>
  );
}
