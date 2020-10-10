import Head from 'next/head'
import Link from 'next/link'

function HomePage() {
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
        <Link href="/alquileres">
          <div className="item-menu-inicio md:rounded-lg">
            Alquileres
          </div>
        </Link>
        <div className="mx-auto w-full text-center pl-6 pr-6 pb-4 pt-4 p-3 border-solid border-2 md:rounded-lg border-gray-400 mb-3">Extravíos</div>
        <Link href="/empleos">
          <div className="item-menu-inicio md:rounded-lg">
            Empleos
          </div>
        </Link>
        <div className="mx-auto w-full text-center pl-6 pr-6 pb-4 pt-4 p-3 border-solid border-2 md:rounded-lg border-gray-400 mb-3">Farmacias</div >
        <div className="mx-auto w-full text-center pl-6 pr-6 pb-4 pt-4 p-3 border-solid border-2 md:rounded-lg border-gray-400 mb-3">Noticias</div >
      </div>
    </main>
    <footer></footer>
  </div>
}

export default HomePage