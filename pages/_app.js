import "@/styles/globals.scss";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { store } from "@/store/store";

import Contentlayout from "../shared/layout-components/layout/content-layout";
import Landingpagelayout from "../shared/layout-components/layout/landingpage-layout";
import Switcherlayout from "../shared/layout-components/layout/switcher-layout";
import Authenticationlayout from "../shared/layout-components/layout/authentication-layout";
import AuthContextProvider from "@/context/AuthCTX";

const layouts = {
  Contentlayout: Contentlayout,
  Landingpagelayout: Landingpagelayout,
  Switcherlayout: Switcherlayout,
  Authenticationlayout: Authenticationlayout,
};
export default function App({ Component, pageProps }) {
  const Layout =
    layouts[Component.layout] ||
    ((pageProps) => <Component>{pageProps}</Component>);

  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Layout>
          <ToastContainer />
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </Provider>
  );
}
