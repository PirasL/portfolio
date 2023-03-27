import { files } from "../constants/dropDownFiles";
import { useTabContext } from "../context/TabContext";

export default function FilesDropDown() {
  const { setDisplayedComponent } = useTabContext();
  return (
    <>
      {files.map((file) => (
        <div key={file.name}>
          <div
            className="bg-lightGrey h-7 flex items-center text-gray-300 p-2 gap-2"
            key={file.name}
          >
            <i className="fa-solid fa-chevron-right fa-xs"></i>
            <p className="text-gray-300 text-xs font-bold">{file.name}</p>
          </div>
          <div className="text-white">
            {file.children.map((child) => (
              <p
                key={child.name}
                className="text-gray-300 flex items-center h-7 pl-2 hover:bg-[#37373d]"
                onClick={() => {
                  setDisplayedComponent(child.name.split(".")[0].toLowerCase());
                }}
              >
                <img
                  src={`/src/assets/seti-icons/${child.icon}.svg`}
                  className="w-6 "
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
