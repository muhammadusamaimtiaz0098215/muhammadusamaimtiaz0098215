import "../styles/globals.scss";
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";
import setAxiosDefault from "../store/utils/setAxiosDefaults";
import NoSSR from "react-no-ssr";
import { wrapper } from "../store";
import Page from "../components/Page";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

setAxiosDefault();

function MyApp({ Component, pageProps }) {

  return (
    <NoSSR>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" href="/images/favicon.png" />
        <title>Graana Admin</title>
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </NoSSR>
  );
}

export default wrapper.withRedux(MyApp);
