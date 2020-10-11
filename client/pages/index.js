import Head from 'next/head'
import MenuButton from '../components/MenuButton'

function HomePage() {
  const menuButtons = [
    "Alquileres",
    "Extravíos",
    "Empleos"
  ]

  return <div className="p-4 max-w-xl mx-auto px-8">
    <Head>
      <title>MiPergamino</title>
      <meta property="og:title" content="MiPergamino" key="title" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>

    </header>
    <main>
      <div className="justify-center items-center">
        {
          menuButtons.map(
            string => <MenuButton key={string} text={string} />
          )
        }
      </div>
    </main>
    <footer></footer>
  </div>
}

export default HomePage