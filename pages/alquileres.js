import Head from "next/head";
import { useEffect, usePrefetchQuery, useState } from "react";

import Filter from "~/components/Filter";
import FilterIcon from "~/components/icons/FilterIcon";
import PageTitle from "~/components/PageTitle";
import RentCard from "~/components/RentCard";
import API from "~/db/alquiler/api";
import useInfiniteScroll from "~/utils/useInfiniteScroll";

export default function Alquileres({ rents }) {
  const [offset, setOffset] = useState(0);
  const { totalDocs } = rents;
  const [rentsData, setRentsData] = useState([]);
  const [sideFilterVisibility, setSideFilterVisibility] = useState("invisible");
  useEffect(() => {
    rents && setRentsData(rents.docs);
  }, []);

  const [isFetching, setIsFetching] = useInfiniteScroll(async () => {
    // Ver IntersectionObserver
    const currentOffSet = offset < totalDocs ? offset + 5 : totalDocs;

    setOffset(currentOffSet);

    const Alquileres = await fetch("/api/alquiler/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filters: {},
        offset: currentOffSet,
        limit: 5,
      }),
    });

    const resultado = await Alquileres.json();
    const rentsConcat = rentsData.concat(resultado.docs);
    setRentsData(rentsConcat);

    setIsFetching(false);
  });

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
          className={`lg:hidden font-bold text-blue-500 my-2 flex items-center space-between`}>
          <FilterIcon size={22} color={"fill-blue"} className="flex" />{" "}
          <span className="flex pl-2">Filtros</span>
        </button>

        <Filter
          handleFilter={handleFilter}
          setSideFilterVisibility={setSideFilterVisibility}
          sideFilterVisibility={sideFilterVisibility}
        />
      </div>

      <div className={`flex flex-row lg:flex-col lg:items-center`}>
        <div
          className="w-full lg:w-3/4 flex flex-col"
          style={{ position: "absolute", top: 70 }}>
          {/* {rentsData.length
            ? rentsData.map((rent) => <RentCard rent={rent} key={rent._id} />)
            : rents.docs.map((rent) => <RentCard rent={rent} key={rent._id} />)} */}
          {rentsData.map((rent) => (
            <RentCard rent={rent} key={rent._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  try {
    // const filters = {
    //   "title": "Casa en alquiler",
    //   "features.bedrooms": 4
    // }
    const filters = {}; // Modificar para obtener Filtros realizados por Bianco

    const Alquileres = await API.Alquileres.fetch(filters, 0, 5); // /api/alquiler/filters

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
