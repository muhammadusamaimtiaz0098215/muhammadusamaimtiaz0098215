import '../styles/globals.css'
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";
import setAxiosDefault from "../store/utils/setAxiosDefaults";
import { wrapper } from "../store";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

setAxiosDefault();

function MyApp({ Component, pageProps }) {
  return (
    <>
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
      <Component {...pageProps} />
    </> 
  ) 
}

export default wrapper.withRedux(MyApp);
