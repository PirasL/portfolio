import Image from "next/image";
import play from "public/icons/interface/play.png";
import source from "public/icons/interface/source.png";
import folder from "public/icons/interface/folder.png";
import cubes from "public/icons/interface/cubes.png";
import search from "public/icons/interface/search.png";

export default function SideNavbar() {
  return (
    <div className="flex  w-full flex-col items-center bg-[#333333] text-gray-400 phone:hidden">
      <div className="flex h-full w-full flex-col items-center  ">
        <div className="flex h-12 w-full items-center justify-center border-l-[2px] border-[#FFFFFF]">
          <Image
            src={folder}
            width={0}
            height={0}
            alt="folder"
            className="h-7 w-auto  invert filter"
          />
        </div>
        <div className="relative flex h-12 w-full items-center justify-center py-3">
          <Image
            src={search}
            width={0}
            height={0}
            alt="search logo"
            className=" h-10 w-auto  invert-[.50] filter"
          />
        </div>
        <div className="relative flex h-12 w-full items-center justify-center py-3 hover:text-white">
          <Image
            src={source}
            alt="search logo"
            width={0}
            height={0}
            className="h-7 w-auto invert-[.50] filter  "
          />
        </div>
        <div className="relative flex h-12 w-full items-center justify-center py-3 hover:text-white">
          <Image
            src={play}
            alt="search logo"
            width={0}
            height={0}
            className="h-7 w-auto invert-[.50] filter "
          />
        </div>
        <div className="relative flex h-12 w-full items-center justify-center py-3 hover:text-white">
          <Image
            src={cubes}
            width={0}
            height={0}
            alt="search logo"
            className="h-7 w-auto invert-[.50] filter "
          />
        </div>
      </div>
    </div>
  );
}
