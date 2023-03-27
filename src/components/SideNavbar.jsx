export default function SideNavbar() {
  return (
    <div className="w-14 bg-[#333333] text-gray-400 flex flex-col items-center min-w-[56px]">
      <div className="mt-2 w-full h-full flex flex-col items-center">
        <div className=" h-14 w-full flex items-center justify-center hover:text-white ">
          <i className="fa-regular fa-folder-open fa-xl  "></i>
        </div>
        <div className="h-14 w-full flex items-center justify-center hover:text-white">
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        </div>
        <div className="h-14 w-full flex items-center justify-center hover:text-white">
          <i className="fa-solid fa-code-branch fa-2xl"></i>
        </div>
        <div className="h-14 w-full flex items-center justify-center hover:text-white">
          <i className="fa-solid fa-circle-play fa-xl "></i>
        </div>
        <div className="h-14 w-full flex items-center justify-center hover:text-white">
          <i className="fa-solid fa-cubes fa-xl"></i>
        </div>
      </div>
    </div>
  );
}
