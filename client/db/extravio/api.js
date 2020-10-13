import '../database'
import Extravio from '../models/extravio.model'

export default {
  Extravios: {
    fetch: async () => {
      const Extravios = await Extravio.find({ "deleted": { $eq: false } })

      return JSON.parse(JSON.stringify(Extravios))
    }
  }
}