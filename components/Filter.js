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
      className={`${sideFilterVisibility} lg:visible flex items-start lg:items-center mb-4 justify-start flex-col lg:flex-row w-32 lg:w-full fixed left-0 top-0 lg:relative z-10 bg-gray-300 lg:h-auto h-screen lg:pt-0 pt-24`}
    >
      <button
        onClick={() => setSideFilterVisibility("invisible")}
        className={`lg:invisible font-bold text-blue-500 ml-24 mb-6 text-xl`}
      >
        x
      </button>
      {filterOptions.slice(0, 2).map((el) => (
        <div className="flex lg:flex-row flex-col items-start lg:items-center mx-1">
          <button className="filterOption">{el}</button>
          <input
            className="w-12 text-center rounded-lg border border-blue-500 text-blue-500 p-1 lg:mx-0 mx-4"
            min="0"
            onChange={(e) => setFilters({ ...filters, [el]: e.target.value })}
            type="number"
            value={filters[el]}
          />
        </div>
      ))}
      {filterOptions.slice(2).map((el) => (
        <button
          className={filters[el] ? "selectedFilterOption" : "filterOption"}
          onClick={() => setFilters({ ...filters, [el]: !filters[el] })}
        >
          {el}
        </button>
      ))}
      <button
        onClick={() => handleFilter(filters)}
        className="text-blue-500 font-bold border-2 border-blue-500 rounded-lg p-1 px-4 lg:mx-0 mx-4"
      >
        Filtrar
      </button>
    </div>
  );
}
