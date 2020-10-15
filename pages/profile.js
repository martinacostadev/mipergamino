import Link from "next/link";
import Head from "next/head";
import PageTitle from "../components/PageTitle";

export default function Profile() {
  return (
    <div className="pt-1 pb-4 max-w-xl mx-auto px-8">
      <Head>
        <title>Perfil - MiPergamino</title>
        <meta property="og:title" content="MiPergamino" key="title" />
      </Head>
      <div className="m-auto">
        <PageTitle title="Perfil" />

        <Link href="/">
          <a>Volver</a>
        </Link>
      </div>
    </div>
  );
}
