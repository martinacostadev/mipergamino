import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useState } from "react";

const initialFilters = {
  Habitaciones: 0,
  Baños: 0,
  Patio: false,
  Garage: false,
  Mascotas: false,
  Niños: false,
  Particular: false,
};
export default function Filter({
  handleFilter,
  setSideFilterVisibility,
  sideFilterVisibility,
}) {
  const [filters, setFilters] = useState(initialFilters);

  const filterOptions = Object.keys(initialFilters);
  return (
    <div
      className={`${sideFilterVisibility} w-32 p-4 mb-2 lg:visible flex items-start lg:items-center justify-start flex-col lg:flex-row lg:w-full fixed left-0 top-0 lg:relative z-10 bg-gray-300 lg:h-auto h-screen lg:pt-0 pt-24`}
    >
      <button
        onClick={() => setSideFilterVisibility("invisible")}
        className={`absolute top-0 left-0 mt-10 mr-4 lg:invisible font-bold text-blue-500 ml-24 mb-6 text-xl`}
      >
        x
      </button>
      {filterOptions.slice(0, 2).map((el, index) => (
        <div key={index} className="flex lg:flex-row flex-col lg:items-center lg:align-middle mr-3">
          <button className={` filterOption`}>{el}</button>
          <input
            className="mb-4 lg:mb-0 w-8 text-center rounded-lg border border-blue-500  p-1 mx-1 lg:mx-0 lg:align-middle"
            min="1" 
            max="5"
            onChange={(e) => setFilters({ ...filters, [el]: e.target.value })}
            type="number"
            value={filters[el]}
          />
        </div>
      ))}
      {filterOptions.slice(2).map((el, index) => (
        <button key={index}
          className={filters[el] ? "selectedFilterOption" : "filterOption"}
          style={{ "alignSelf": "flex-start", marginTop: 6, marginLeft: 7, "verticalAlign": "middle"  }}
          onClick={() => setFilters({ ...filters, [el]: !filters[el] })}
        >
          {el}
        </button>
      ))}
      <button
        onClick={() => { setSideFilterVisibility("invisible"); handleFilter(filters); }}
        className="mt-4 lg:mt-0 p-1 px-4 lg:mx-0 text-blue-500 font-bold border border-blue-500 rounded-lg"
      >
        Filtrar
      </button>

      <div className="hidden lg:block md:ml-6">
        <Link href="/alquileres/nuevo">
          <button className="cursor-pointer p-1 px-4 lg:mx-0 mx-4 hover:bg-green-500 text-white-700 font-semibold hover:text-white border border-green-500 hover:border-transparent rounded-full">
            <FontAwesomeIcon icon={faPlus} width={24} className="text-green-600" />
          </button> 
        </Link>
      </div>      
    </div>
  );
}
