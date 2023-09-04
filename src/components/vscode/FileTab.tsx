import React from "react";
import { useAppContext } from "../../context/TabContext";

export default function FileTabContainer() {
  const { openTab, setOpenTab } = useAppContext();

  interface TabItemProps {
    name: string;
    icon: string;
    anchor: string;
  }

  function deleteTab(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target;
    if (target instanceof HTMLDivElement) {
      const array = openTab.filter(
        (item: TabItemProps) => item.name !== target.dataset.tabname
      );
      setOpenTab(array);
    }
  }

  function FileTab({ name, icon, anchor }: TabItemProps) {
    return (
      <div className="group  flex h-full items-center bg-[#2d2d2d] pl-3 pr-1 text-gray-300 focus:text-white">
        <div className="mr-1 flex h-6 w-6 items-center">
          <img src={`/icons/${icon}.svg`} />
        </div>
        <a href={anchor} className="text-sm">
          {name}
        </a>
        <div
          className="invisible ml-1 flex h-6 w-6 items-center justify-center rounded-md hover:bg-[#3b3c3c] group-hover:visible"
          onClick={deleteTab}
          data-tabname={name}
        >
          X
        </div>
      </div>
    );
  }

  return (
    <div className="flex  h-8 cursor-pointer gap-[1px] bg-[#252526] phone:hidden">
      {openTab.map((tab: TabItemProps) => (
        <FileTab
          name={tab.name}
          icon={tab.icon}
          key={tab.name}
          anchor={tab.anchor}
        />
      ))}
    </div>
  );
}
