import { useQuery } from "react-query";
import API from "../db/alquiler/api";

export const getRents = async () => {
  const filters = {};
  const data = await API.Alquileres.fetch(filters);

  return data;
};

export default function useRents() {
  return useQuery("rents", getRents);
}
