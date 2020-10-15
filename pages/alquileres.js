import { useEffect, useState } from "react";
import Head from "next/head";
import Filter from "../components/Filter";
import RentCard from "../components/RentCard";
import PageTitle from "../components/PageTitle";
import API from "../db/alquiler/api";

export default function Alquileres({ rents }) {
  const [rentsData, setRentsData] = useState([]);
  const [sideFilterVisibility, setSideFilterVisibility] = useState("invisible");
  useEffect(() => {
    rents && setRentsData(rents);
  }, []);
  const handleFilter = ({
    Habitaciones,
    Baños,
    Patio,
    Garage,
    Mascotas,
    Niños,
    Particular,
  }) => {
    const parsedBedrooms = parseInt(Habitaciones);
    const parsedBathrooms = parseInt(Baños);
    const filteredData = rents.filter(({ features, isparticular }) => {
      const {
        bedrooms,
        bathrooms,
        garage,
        exterior,
        petsallowed,
        childrenallowed,
      } = features;
      return (
        (!parsedBedrooms || parsedBedrooms == bedrooms) &&
        (!parsedBathrooms || parsedBathrooms == bathrooms) &&
        (!Patio || Patio == exterior) &&
        (!Garage || Garage == garage) &&
        (!Mascotas || Mascotas == petsallowed) &&
        (!Niños || Niños == childrenallowed) &&
        (!Particular || Particular == isparticular)
      );
    });
    setRentsData(filteredData);
  };
  return (
    <div className="mx-auto">
      <Head>
        <title>Alquileres - MiPergamino</title>
        <meta property="og:title" content="MiPergamino" key="title" />
      </Head>
      <PageTitle title="Alquileres" />
      <button
        onClick={() => setSideFilterVisibility("visible")}
        className={`lg:hidden font-bold text-blue-500 my-2`}
      >
        Añadir filtro
      </button>
      <div className={`flex flex-row lg:flex-col`}>
        <Filter
          handleFilter={handleFilter}
          setSideFilterVisibility={setSideFilterVisibility}
          sideFilterVisibility={sideFilterVisibility}
        />
        <div className="flex flex-col">
          {rentsData.map((rent) => (
            <RentCard rent={rent} key={rent._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const Alquileres = await API.Alquileres.fetch();

    return {
      props: {
        rents: Alquileres,
      },
    };
  } catch (err) {
    console.log("err", err);
    return {
      props: {
        rents: [],
      },
    };
  }
};
