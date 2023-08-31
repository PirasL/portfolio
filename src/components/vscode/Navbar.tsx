import Image from "next/image";
import vsclogo from "/public/icons/vsclogo.png";

export default function Navbar() {
  return (
    <div className="flex  w-full items-center justify-between bg-[#323233] text-gray-400 phone:hidden">
      <div className="flex items-center overflow-hidden text-[13px]">
        <Image alt="vscode logo" src={vsclogo} className="h-[20px] w-[40px]" />
        <div className="ml-2  hidden flex-col gap-[2px] tablet:flex">
          <div className="w-[16px] border"></div>
          <div className="w-[16px] border"></div>
          <div className="w-[16px] border"></div>
        </div>
        <div className="tablet:hidden">
          <span className="text-md group mx-[1px]  rounded-md px-2 hover:bg-hoverGray hover:text-white">
            File
          </span>
          <span className="text-md mx-[1px] rounded-md  px-2 hover:bg-hoverGray hover:text-white">
            Edit
          </span>
          <span className="text-md mx-[1px] rounded-md  px-2 hover:bg-hoverGray hover:text-white">
            Selection
          </span>
          <span className="text-md mx-[1px] rounded-md  px-2 hover:bg-hoverGray hover:text-white">
            View
          </span>
          <span className="text-md mx-[1px] rounded-md  px-2 hover:bg-hoverGray hover:text-white">
            Go
          </span>
          <span className="text-md mx-[1px] rounded-md  px-2 hover:bg-hoverGray hover:text-white">
            Run
          </span>
          <span className="text-md mx-[1px] rounded-md  px-2 hover:bg-hoverGray hover:text-white">
            Terminal
          </span>
          <span className="text-md mx-[1px] rounded-md  px-2 hover:bg-hoverGray hover:text-white">
            Help
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <i className="fa-solid fa-arrow-left mx-2 rounded-md px-2 py-1 hover:bg-hoverGray"></i>
        <i className="fa-solid fa-arrow-right mx-2 rounded-md px-2 py-1 hover:bg-hoverGray"></i>
        <input className="w-[30vw] rounded-md border-[1px] border-solid border-slate-600 bg-[#282c34]" />
      </div>
      <div className="flex items-center justify-between">
        <div className="group flex h-10 w-12 items-center justify-center hover:bg-[#ffffff28] group-hover:text-white">
          <div className="h-[2px] w-[15px] rounded-xl bg-gray-400 group-hover:bg-white"></div>
        </div>
        <div className="flex h-10 w-12 items-center justify-center hover:bg-[#ff0011] hover:text-[#ffffff]">
          <span>X</span>
        </div>
      </div>
    </div>
  );
}
