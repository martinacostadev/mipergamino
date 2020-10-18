import { useEffect, useState } from "react";
import Head from "next/head";
import Filter from "../components/Filter";
import FilterIcon from "../components/icons/FilterIcon";
import RentCard from "../components/RentCard";
import PageTitle from "../components/PageTitle";
import API from "../db/alquiler/api";
import usePageBottom from "../utils/InifiniteScroll";

export default function Alquileres({ rents }) {
  const [rentsData, setRentsData] = useState([]);
  const [sideFilterVisibility, setSideFilterVisibility] = useState("invisible");
  const isPageBottom = usePageBottom();

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
    <div className="mx-auto relative">
      <Head>
        <title>Alquileres - MiPergamino</title>
        <meta property="og:title" content="MiPergamino" key="title" />
      </Head>

      <div className="fixed z-50 flex bg-gray-300 w-22 p-2 rounded-r-md lg:w-full lg">
        <PageTitle title="Alquileres" />

        <button
          onClick={() => setSideFilterVisibility("visible")}
          className={`lg:hidden font-bold text-blue-500 my-2 flex items-center space-between`}
        >
          <FilterIcon size={22} color={"fill-blue"} className="flex" />{" "}
          <span className="flex pl-2">Filtros</span>
        </button>

        <Filter
          handleFilter={handleFilter}
          setSideFilterVisibility={setSideFilterVisibility}
          sideFilterVisibility={sideFilterVisibility}
        />
      </div>

      <div className={`flex flex-row lg:flex-col`}>
        <div
          className="w-full flex flex-col"
          style={{ position: "absolute", top: 70 }}
        >
          {rentsData.map((rent) => (
            <RentCard rent={rent} key={rent._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  // Implementar React Query en un futuro
  //const page = query.page || 1;

  try {
    // const filters = {
    //   "title": "Casa en alquiler",
    //   "features.bedrooms": 4
    // }
    const filters = {}; // Modificar para obtener Filtros realizados por Bianco

    const Alquileres = await API.Alquileres.fetch(filters); // /api/alquiler/filters

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
