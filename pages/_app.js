import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";

import "../styles/global.css";

Router.events.on("routeChangeStart", (url) => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Professor Marcelo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}
