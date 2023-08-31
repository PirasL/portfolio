import React from "react";
import FileTab from "./FileTab";
import CoreComponent from "../content/CoreComponent";
import SideNavbar from "./SideNav";
import FileExplorer from "./FileExplorer";

export default function MainContainer() {
  return (
    <div className=" grid grid-cols-[50px_0_1fr] overflow-hidden bg-slate-400 2xl:grid-cols-[50px_250px_1fr] phone:grid-cols-[1fr] ">
      <SideNavbar />
      <FileExplorer />
      <div className=" flex flex-col bg-slate-800">
        <FileTab />
        <CoreComponent />
      </div>
    </div>
  );
}
