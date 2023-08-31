import { files } from "../../constant/dropDownFiles";
import Image from "next/image";

export default function FilesContainer() {
  return (
    <div className=" bg-[#252526] lg:w-[250px] phone:hidden ">
      <div className="mx-5 flex h-8 items-center justify-between text-gray-400">
        <p className=" flex items-center justify-center text-[11px]  font-bold ">
          EXPLORER
        </p>
        <p className="box-border flex h-6 items-center rounded-md px-1 text-xl hover:bg-[#313438]">
          <i className="fa-solid fa-ellipsis fa-xs"></i>
        </p>
      </div>
      <FilesDropDown />
    </div>
  );
}

function FilesDropDown() {
  //   const { setDisplayedComponent } = useTabContext();
  return (
    <>
      {files.map((file) => (
        <div key={file.name}>
          <div
            className="flex h-7 items-center gap-2 bg-[#252526] p-2 text-gray-300 "
            key={file.name}
          >
            <i className="fa-solid fa-chevron-right fa-xs"></i>
            <p className="text-xs font-bold text-gray-300">{file.name}</p>
          </div>
          <div className="text-sm text-white">
            {file.children.map((child) => (
              <p
                key={child.name}
                className="flex h-7 items-center pl-2 text-gray-300 hover:bg-[#37373d]"
                onClick={() => {
                  //   setDisplayedComponent(child.name.split(".")[0].toLowerCase());
                }}
              >
                <Image
                  src={child.icon}
                  alt={"vscode logo"}
                  width={21}
                  height={10}
                />
                {child.name}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
