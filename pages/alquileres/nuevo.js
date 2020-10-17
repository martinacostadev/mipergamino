import Head from "next/head";
import NuevoAlquiler from "../../components/NuevoAlquiler";
import PageTitle from "../../components/PageTitle";
// import API from "../../db/empleo/api";
import { Provider as SessionProvider } from "../../src/session/context";

export default function Nuevo() {
  return (
    <SessionProvider>
      <div className="mx-auto">
        <Head>
          <title>Nuevo Alquiler - MiPergamino</title>
          <meta property="og:title" content="MiPergamino" key="title" />
        </Head>
        <div className="m-auto">
          <PageTitle title="Nuevo Alquiler" />

          <NuevoAlquiler />
        </div>
      </div>
    </SessionProvider>    
  );
}

export const getServerSideProps = async () => {
    return {
      props: {
        nuevo: [],
      },
    };
};
