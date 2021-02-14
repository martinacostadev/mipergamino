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

      return JSON.parse(JSON.stringify(Alquileres));
    },
    save: async ({ body }) => {
      const Alquileres = await Alquiler.insertMany(body);

      return JSON.parse(JSON.stringify(Alquileres));
    },
  },
};
