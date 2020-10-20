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
  },
};
