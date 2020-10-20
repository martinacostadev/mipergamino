import API from "../../../db/alquiler/api";

export default async (req, res) => {
  console.log(req);
  // Call different methods depending on the method
  switch (req.method) {
    case "POST": {
      try {
        const {
          body: { filters, offset, limit },
        } = req;

        // If everything is fine, return the results
        return res
          .status(200)
          .json(await API.Alquileres.fetch(filters, offset, limit));
      } catch (error) {
        // Return a 400 if something failed
        return res.status(400).json({ error });
      }
    }
  }

  // If nothing matched, we return a 400
  return res.status(400).end();
};
