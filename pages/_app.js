import '@/styles/globals.scss';
import Contentlayout from '../shared/layout-components/layout/content-layout';
import Landingpagelayout from '../shared/layout-components/layout/landingpage-layout';
import Switcherlayout from '../shared/layout-components/layout/switcher-layout';
import Authenticationlayout from '../shared/layout-components/layout/authentication-layout';

const layouts = {
  Contentlayout: Contentlayout,
  Landingpagelayout: Landingpagelayout,
  Switcherlayout: Switcherlayout,
  Authenticationlayout: Authenticationlayout,
};
export default function App({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((pageProps) => <Component>{pageProps}</Component>);
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
