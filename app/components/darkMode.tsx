"use client";
import Image from "next/image";

export default function DarkModeView() {
  return (
    <div className="relative">
      <Image src="/dark-mode.png" alt="brand-avatar" width={20} height={20} />
    </div>
  );
}
