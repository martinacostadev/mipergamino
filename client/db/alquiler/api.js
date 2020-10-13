import '../database'
import Alquiler from '../models/alquiler.model'

export default {
  Alquileres: {
    fetch: async () => {
      const Alquileres = await Alquiler.find({ "deleted": { $eq: false } })

      return JSON.parse(JSON.stringify(Alquileres))
    }
  }
}