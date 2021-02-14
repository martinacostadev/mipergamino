import Head from "next/head";
import NavBar from "./NavBar";

function HeadComponent({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content="MiPergamino" key="title" />
    </Head>
  )
}

export default function MainLayout({ children, title }) {
  return (
    <>
      <HeadComponent title={title} />
      <NavBar />
      <main className="lg:px-8 px-4 mt-32 m-auto">{children}</main>
    </>
  );
}
