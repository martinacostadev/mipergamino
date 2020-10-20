import API from "../../db/alquiler/api";
import RentCard from "../../components/RentCard";

export default function Detalle({ rent }) {
  return <RentCard rent={rent} />;
}

export const getServerSideProps = async ({ params }) => {
  const { id } = params;

  const filters = {
    _id: id,
  };

  try {
    const Alquiler = await API.Alquileres.fetch(filters, 0, 1);

    return {
      props: {
        rent: Alquiler.docs[0],
      },
    };
  } catch (err) {
    console.log("err", err);
    return {
      props: {
        rent: [],
      },
    };
  }
};
