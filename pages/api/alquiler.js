export default async (req, res) => {
  // Call different methods depending on the method
  switch (req.method) {
    case "GET": {
      try {
        // Get the results from the api
        const results = { body: 'Hello World' };

        // If everything is fine, return the results
        return res.status(200).json(results);
      } catch (error) {
        // Return a 400 if something failed
        return res.status(400).json({ error });
      }
    }

    case "POST": {
      try {
        // Get the results from the api
        const results = { body: 'Hello World' };

        // If everything is fine, return the results
        return res.status(200).json(results);
      } catch (error) {
        // Return a 400 if something failed
        return res.status(400).json({ error });
      }
    }

    case "PATCH": {
      try {
        // Get the results from the api
        const results = { body: 'Hello World' };

        // If everything is fine, return the results
        return res.status(200).json(results);
      } catch (error) {
        // Return a 400 if something failed
        return res.status(400).json({ error });
      }
    }
  }

  // If nothing matched, we return a 400
  return res.status(400).end();
};