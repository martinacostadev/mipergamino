import Head from 'next/head'
import "../styles/tailwind.css";
import "react-multi-carousel/lib/styles.css";
import { Provider as SessionProvider } from "../src/session/context";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mi Pergamino</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="og:title" content="MiPergamino" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SessionProvider>
        <Component {...pageProps} />
        <div></div>
        <div id="modalgoncy"></div>
      </SessionProvider >
    </>
  );
}
