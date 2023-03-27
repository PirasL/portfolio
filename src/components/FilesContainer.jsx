import FilesDropDown from "./FilesDropDown";

export default function FilesContainer() {
  return (
    <div className="w-[220px] bg-[#252526] min-w-[220px]">
      <div className="flex justify-between text-gray-400 h-12 items-center mx-5">
        <p className=" text-gray-400 text-[11px] flex justify-center  items-center">
          EXPLORER
        </p>
        <p className="text-xl hover:bg-[#313438] box-border rounded-md px-1 flex items-center h-6">
          <i className="fa-solid fa-ellipsis fa-xs"></i>
        </p>
      </div>
      <FilesDropDown />
    </div>
  );
}
