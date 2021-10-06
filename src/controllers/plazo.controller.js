const { errorHandler } = require("../helpers/handlers");
const Plazo = require("../models/plazo.model");

module.exports = {
  getAll: async (req, res) => {
    try {
      const plazos = await Plazo.find({});
      res.status(200).json({
        msg: "plazos listados",
        data: plazos,
      });
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  getOne: async (req, res) => {
    try {
      const { plazoId } = req.params;
      const plazo = await Plazo.findById(plazoId);
      res.status(200).json({
        msg: "plazo listado",
        data: plazo,
      });
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  createOne: async (req, res) => {
    try {
      const plazoCreado = await Plazo.create({ ...req.body });
      res.status(201).json({
        msg: "plazo creado correctamente",
        data: plazoCreado,
      });
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  updateOne: async (req, res) => {
    try {
      const { plazoId } = req.params;
      const plazoActualizado = await Plazo.findByIdAndUpdate(
        plazoId,
        { ...req.body },
        { new: true }
      );

      res.status(200).json({
        msg: "plazo actualizado correctamente",
        data: plazoActualizado,
      });
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  deleteOne: async (req, res) => {
    try {
      const { plazoId } = req.params;
      const plazoEliminado = await Plazo.findByIdAndDelete(plazoId);

      res.status(200).json({
        msg: "plazo eliminado correctamente",
        data: plazoEliminado,
      });
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
};
