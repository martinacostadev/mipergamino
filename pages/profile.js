import Link from "next/link";
import Head from 'next/head'

export default function Profile() {
  return (
    <div className="pt-1 pb-4 max-w-xl mx-auto px-8">
      <Head>
        <title>Perfil - MiPergamino</title>
        <meta property="og:title" content="MiPergamino" key="title" />
      </Head>
      <div className="m-auto">
        <div className="text-3xl mb-5">
          <h2>Perfil</h2>
        </div>

        <Link href="/">
          <a>Volver</a>
        </Link>
      </div>
    </div>
  );
}
