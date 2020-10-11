const express = require('express');
const alquilerRouter = express.Router();
const Alquiler = require('../models/alquiler.model'); // alquiler model

alquilerRouter.get('/', (req, res, next) => {
  Alquiler.find({ "deleted": { $eq: false } }, function (err, result) {
    if (err) return res.status(400).send(err.message);

    res.status(200).send(result);
  });
});

/* Get Single Alquiler */
alquilerRouter.get("/:id", (req, res, next) => {
  Alquiler.findById(req.params.id, function (err, result) {
    if (err) {
      res.status(400).send({
        error: err.message
      });
    }
    res.status(200).send({
      data: result
    });
  });
});


/* Add Single Alquiler */
alquilerRouter.post("/", (req, res) => {
  const newRent = new Alquiler(req.body);

  console.log('newRent', newRent);

  Alquiler.create(newRent, function (err) {
    if (err) return res.status(400).send(err.message);

    res.status(201).send(newRent);
    //message: "Alquiler creado correctamente"
  });
});

/* Edit Single Alquiler */
alquilerRouter.patch("/:alquiler_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  Alquiler.findByIdAndUpdate(req.params.alquiler_id, { $set: fieldsToUpdate }, { new: true }, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(200).send({
      success: true,
      data: result,
      message: "Alquiler actualizado correctamente"
    });
  });
});

/* Delete Single Alquiler */
alquilerRouter.delete("/:alquiler_id", (req, res, next) => {
  Alquiler.findByIdAndDelete(req.params.alquiler_id, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(200).send({
      success: true,
      data: result,
      message: "Alquiler eliminado correctamente"
    });
  });
});

module.exports = alquilerRouter;