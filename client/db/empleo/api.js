import '../database'
import Empleo from '../models/empleo.model'

export default {
  Empleos: {
    fetch: async () => {
      const Empleos = await Empleo.find({ "deleted": { $eq: false } })

      return JSON.parse(JSON.stringify(Empleos))
    }
  }
}