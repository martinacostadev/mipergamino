import '../database'
import Alquiler from '../models/alquiler.model'

export default {
  Alquileres: {
    fetch: async (filters) => {
      const Alquileres = await Alquiler.find({ "deleted": { $eq: false }, ...filters })

      return JSON.parse(JSON.stringify(Alquileres))
    }
  }
}