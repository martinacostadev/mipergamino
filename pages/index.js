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
        <div className="grid grid-flow-col grid-rows-3 sm:grid-rows-1 gap-4 py-4 justify-items-center">
          {menuButtons.map((string) => (
            <MenuButton key={string} text={string} />
          ))}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
