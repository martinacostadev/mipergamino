import Head from "next/head";
import EmpleoCard from "../components/EmpleoCard";
import PageTitle from "../components/PageTitle";
import API from "../db/empleo/api";

export default function Empleos({ empleos }) {
  return (
    <div className="mx-auto">
      <Head>
        <title>Empleos - MiPergamino</title>
        <meta property="og:title" content="MiPergamino" key="title" />
      </Head>
      <div className="m-auto">
        <PageTitle title="Empleos" />

        {empleos.map((empleo) => (
          <EmpleoCard empleo={empleo} key={empleo._id} />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const Empleos = await API.Empleos.fetch();

    return {
      props: {
        empleos: Empleos,
      },
    };
  } catch (err) {
    console.log("err", err);
    return {
      props: {
        empleos: [],
      },
    };
  }
};
