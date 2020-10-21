import API from "~/db/alquiler/api";

export default async (req, res) => {
  switch (req.method) {
    case "PUT": {
      try {
        const {
          body: { filters, offset, limit },
        } = req;

        return res
          .status(200)
          .json(await API.Alquileres.fetch(filters, offset, limit));
      } catch (error) {
        return res.status(400).json({ error });
      }
    }

    case "POST": {
      try {
        console.log("req Pages/API/Alquileres/Index ", req);
        //req.method = "POST";

        const { body } = req;

        if (body)
          return res.status(200).json(await API.Alquileres.save({ body }));
      } catch (error) {
        return res.status(400).json({ error });
      }
    }
  }

  return res.status(400).end();
};
