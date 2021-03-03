import EmpleoCard from "~/components/EmpleoCard";
import MainLayout from "~/components/MainLayout";
import PageTitle from "~/components/PageTitle";
import API from "~/db/empleo/api";

export default function Empleos({ empleos }) {
  const RenderEmpleos = empleos?.map((empleo) => (
    <EmpleoCard empleo={empleo} key={empleo._id} />
  ))

  return (
    <MainLayout title="Empleos - MiPergamino">
      <PageTitle title="Empleos" />
      {RenderEmpleos}
    </MainLayout>
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
