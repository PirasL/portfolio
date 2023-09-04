import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex h-full justify-between bg-[#007acc] text-white phone:hidden">
      <div className="flex h-full pl-4 text-white">
        <div className=" flex h-full w-9 items-center justify-center gap-1">
          <Image
            alt="warning logo"
            src={"/icons/errorLogo.svg"}
            width={0}
            height={0}
            className="h-[20px] w-auto"
          />
          <span className="text-sm">0</span>
        </div>
        <div className="flex h-full w-9 items-center justify-center gap-1 px-2">
          <Image
            alt="warning logo"
            src={"/icons/warningLogo.svg"}
            width={15}
            height={15}
          />
          <span className="text-sm">0</span>
        </div>
      </div>
      <div className="flex h-full gap-2">
        <div className="flex   h-full  items-center justify-center px-2 text-sm hover:bg-white/20">
          UTF-8
        </div>
        <div className="flex h-full items-center  justify-center px-2 text-sm hover:bg-white/20">
          CRLF
        </div>
        <div className="flex h-full items-center justify-center px-2 text-sm hover:bg-white/20">
          &#123; &#125; Typescript JSX
        </div>
        <div className="flex h-full items-center justify-center px-2 text-sm hover:bg-white/20">
          {" "}
          <Image
            alt="feedback logo"
            src={"/icons/feedbackLogo.svg"}
            width={0}
            height={0}
            className="h-[14px] w-auto"
          />
        </div>
        <div className="flex h-full items-center justify-center px-2 text-sm hover:bg-white/20">
          <Image
            alt="bell logo"
            src={"/icons/bell.svg"}
            width={0}
            height={0}
            className="h-[14px] w-auto"
          />
        </div>
      </div>
    </div>
  );
}
