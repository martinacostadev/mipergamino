import API from "~/db/alquiler/api";

const getRents = async () => {
  const filters = {};
  const data = await API.Alquileres.fetch(filters);
  console.log("Data GetRents: ", data);

  return data;
};

export default getRents;
