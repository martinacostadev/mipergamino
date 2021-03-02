import Head from "next/head";
import Login from "../../components/Login";
import NuevoExtravio from "../../components/NuevoExtravio";
import PageTitle from "../../components/PageTitle";
import { useUser, useSessionActions } from "../../src/session/hooks";

export default function Nuevo() {
  const user = useUser();
  const { signIn } = useSessionActions();

  if (!user) return <Login login={signIn} />;

  return (
    <div className="mx-auto">
      <Head>
        <title>Nuevo Alquiler - MiPergamino</title>
        <meta property="og:title" content="MiPergamino" key="title" />
      </Head>
      <div className="m-auto">
        <PageTitle title="Nuevo Alquiler" />

        <NuevoExtravio />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      nuevo: [],
    },
  };
};
