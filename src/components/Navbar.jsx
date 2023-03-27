import vsclogo from "../assets/vsclogo.png";

export default function Navbar() {
  return (
    <div className="bg-[#323233] flex justify-between text-gray-400 h-10 items-center">
      <div className="flex items-center text-[13px]">
        <img src={vsclogo} className="w-[40px] h-[20px]" />
        <span className="px-2 mx-[1px] text-md  hover:bg-hoverGray rounded-md">
          File
        </span>
        <span className="px-2 mx-[1px] text-md  hover:bg-hoverGray rounded-md">
          Edit
        </span>
        <span className="px-2 mx-[1px] text-md  hover:bg-hoverGray rounded-md">
          Selection
        </span>
        <span className="px-2 mx-[1px] text-md  hover:bg-hoverGray rounded-md">
          View
        </span>
        <span className="px-2 mx-[1px] text-md  hover:bg-hoverGray rounded-md">
          Go
        </span>
        <span className="px-2 mx-[1px] text-md  hover:bg-hoverGray rounded-md">
          Run
        </span>
        <span className="px-2 mx-[1px] text-md  hover:bg-hoverGray rounded-md">
          Terminal
        </span>
        <span className="px-2 mx-[1px] text-md  hover:bg-hoverGray rounded-md">
          Help
        </span>
      </div>
      <div className="flex items-center">
        <i className="fa-solid fa-arrow-left mx-2 hover:bg-hoverGray px-2 py-1 rounded-md"></i>
        <i className="fa-solid fa-arrow-right mx-2 hover:bg-hoverGray px-2 py-1 rounded-md"></i>
        <input className="rounded-md w-[30vw] bg-[#282c34] border-solid border-[1px] border-slate-600" />
      </div>

      <div className="flex items-center justify-between">
        <div className="h-10 w-12 items-center justify-center flex hover:bg-[#313438]">
          <div className="h-[2px] w-[15px] rounded-xl  bg-gray-400"></div>
        </div>
        <div className="h-10 w-12 items-center justify-center flex hover:bg-[#313438]">
          <i className="fa-regular fa-square fa-small "></i>
        </div>
        <div className="h-10 w-12 items-center justify-center flex hover:text-[#ffffff] hover:bg-[#ff0011]">
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>
  );
}
