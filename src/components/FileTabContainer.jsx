import React from "react";
import { useTabContext } from "../context/TabContext";

export default function FileTabContainer() {
  const { openTab, setOpenTab } = useTabContext();

  function deleteTab(e) {
    const array = openTab.filter(
      (item) => item.name !== e.target.dataset.tabname
    );
    setOpenTab(array);
  }

  function FileTab({ name, icon }) {
    return (
      <div className="h-12  items-center flex bg-[#2d2d2d] focus:text-white text-gray-300 pr-1 pl-3 group">
        <div className="w-6 h-6 mr-1 flex items-center">
          <img src={`/src/assets/seti-icons/${icon}.svg`} />
        </div>
        <p>{name}</p>
        <div
          className="w-6 h-6 flex items-center justify-center hover:bg-[#3b3c3c] rounded-md ml-1 invisible group-hover:visible"
          onClick={deleteTab}
          data-tabname={name}
        >
          <i className="fa-solid fa-xmark pointer-events-none hidden"></i>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#252526]  h-12 flex cursor-pointer gap-[1px]">
      {openTab.map((tab) => (
        <FileTab name={tab.name} icon={tab.icon} key={tab.name} />
      ))}
    </div>
  );
}
