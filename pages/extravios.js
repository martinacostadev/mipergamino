import ExtravioCard from "~/components/ExtravioCard";
import MainLayout from "~/components/MainLayout";
import PageTitle from "~/components/PageTitle";
import API from "~/db/extravio/api";

export default function Extravios({ extravios }) {
  const RenderExtravios = extravios?.map((extravio) => (
    <ExtravioCard extravio={extravio} key={extravio._id} />
  ))

  return (
    <MainLayout title="Extravíos - MiPergamino">
      <div className="m-auto" style={{ height: 10 }}>
        <PageTitle title="Extravíos" />
        {RenderExtravios}
      </div>
    </MainLayout >
  );
}

export const getServerSideProps = async () => {
  try {
    const Extravios = await API.Extravios.fetch();

    return {
      props: {
        extravios: Extravios,
      },
    };
  } catch (err) {
    console.log("err", err);
    return {
      props: {
        extravios: [],
      },
    };
  }
};
