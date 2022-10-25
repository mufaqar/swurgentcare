import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/components/PreLoader";
import "../styles/globals.css";
import NextNProgress from 'nextjs-progressbar';


function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      {loader && <PreLoader />}
      <Head>
        <title>Urgent Medical Care in Houston, TX - SWUrgentCare</title>
        <link
          rel="shortcut icon"
          href="favicon.ico"
          type="img/png"
        />
      </Head>
      <NextNProgress />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
