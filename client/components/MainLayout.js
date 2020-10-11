import Head from "next/head";
import NavBar from "./NavBar";

export default function MainLayout({ children }) {
  return <div className="container px-4">
    <Head>
      <title>MiPergamino</title>
      <meta property="og:title" content="MiPergamino" key="title" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
    <div className="sm:mt-6 md:mt-2">{children}</div>
  </div>
};