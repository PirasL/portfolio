import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TabContextProvider } from "./context/TabContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TabContextProvider>
      <App />
    </TabContextProvider>
  </React.StrictMode>
);
