import Head from "next/head";

import MenuButton from "../components/MenuButton";

const menuButtons = ["Alquileres", "Extravíos", "Empleos"];
export default function HomePage() {
  return (
    <div id="root">
      <Head>
        <title>MiPergamino</title>
        <meta property="og:title" content="MiPergamino" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="root">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center h-36 sm:grid-rows-1 gap-4 py-4">
          {menuButtons.map((string) => (
            <MenuButton key={string} text={string} />
          ))}
        </div>
        <div className="flex items-center justify-center"></div>
      </main>
      <footer></footer>
    </div>
  );
}
