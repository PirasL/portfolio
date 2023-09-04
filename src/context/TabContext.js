import { useState, createContext, useContext } from "react";

// @ts-ignore
const TabContext = createContext();

// @ts-ignore
export function ContextProvider({ children }) {
  const [openTab, setOpenTab] = useState([
    { name: "index.html", icon: "html", anchor: "#index" },
    { name: "project.css", icon: "css", anchor: "#project" },
    { name: "ABOUTME.md", icon: "css", anchor: "#aboutme" },
    { name: "contact.json", icon: "css", anchor: "#contact" },
  ]);

  const [toggleModal, setToggleModal] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [displayedComponent, setDisplayedComponent] = useState("index");

  return (
    <TabContext.Provider
      value={{
        openTab,
        setOpenTab,
        displayedComponent,
        setDisplayedComponent,
        toggleModal,
        setToggleModal,
        activeProject,
        setActiveProject,
      }}
    >
      {children}
    </TabContext.Provider>
  );
}

export const useAppContext = () => useContext(TabContext);
