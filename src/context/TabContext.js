import { useState, createContext, useContext } from "react";

// @ts-ignore
const TabContext = createContext();

// @ts-ignore
export function TabContextProvider({ children }) {
  const [openTab, setOpenTab] = useState([
    { name: "index.html", icon: "html" },
    { name: "style.css", icon: "css" },
    { name: "ABOUTME.md", icon: "css" },
    { name: "projects.json", icon: "css" },
  ]);

  const [displayedComponent, setDisplayedComponent] = useState("index");

  return (
    <TabContext.Provider
      value={{ openTab, setOpenTab, displayedComponent, setDisplayedComponent }}
    >
      {children}
    </TabContext.Provider>
  );
}

export const useTabContext = () => useContext(TabContext);
