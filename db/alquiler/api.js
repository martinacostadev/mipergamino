import "../database";
import Alquiler from "../models/alquiler.model";

export default {
  Alquileres: {
    fetch: async (filters, offset, limit) => {
      const Alquileres = await Alquiler.paginate(
        {
          deleted: { $eq: false },
          ...filters,
        },
        { offset, limit }
      );

      console.log(Alquileres);

      return JSON.parse(JSON.stringify(Alquileres));
    },
    save: async ({ body }) => {
      // console.log("A la API llega bien");
      // console.log("El Body ", body);

      const Alquileres = await Alquiler.insertMany(body);

      console.log(Alquileres);

      return JSON.parse(JSON.stringify(Alquileres));
    },
  },
};
