import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { TabContextProvider } from "../context/TabContext";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <TabContextProvider>
      <Component {...pageProps} />
    </TabContextProvider>
  );
};

export default api.withTRPC(MyApp);
