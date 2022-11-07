import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/components/PreLoader";
import "../styles/globals.css";
import NextNProgress from 'nextjs-progressbar';
import { store } from '../lib/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  // const [loader, setLoader] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 2000);
  // }, []);

  return (
    <Fragment>
      {/* {loader && <PreLoader />} */}
      <Head>
        <title>Urgent Medical Care in Houston, TX - SWUrgentCare</title>
        <link
          rel="shortcut icon"
          href="favicon.ico"
          type="img/png"
        />
      </Head>
      <NextNProgress />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}

export default MyApp;
