const Producto = require("../models/producto.model");
const { errorHandler } = require("../helpers/handlers");

module.exports = {
  getAll: async (req, res) => {
    try {
      const productos = await Producto.find({});
      res.status(200).json({
        msg: "productos listados",
        data: productos,
      });
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  getOne: async (req, res) => {
    try {
      const { productId } = req.params;
      const producto = await Producto.findById(productId);
      //   console.log(producto);
      res.status(200).json({
        msg: "producto listado",
        data: producto,
      });
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  createOne: async (req, res) => {
    try {
      const productoCreado = await Producto.create({ ...req.body });
      res.status(201).json({
        msg: "producto creado correctamente",
        data: productoCreado,
      });
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  updateOne: async (req, res) => {
    try {
      const { productId } = req.params;
      const productoActualizado = await Producto.findByIdAndUpdate(
        productId,
        { ...req.body },
        { new: true }
      );

      res.status(200).json({
        msg: "producto actualizado correctamente",
        data: productoActualizado,
      });
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  deleteOne: async (req, res) => {
    try {
      const { productId } = req.params;
      const productoEliminado = await Producto.findByIdAndDelete(productId);

      res.status(200).json({
        msg: "producto eliminado correctamente",
        data: productoEliminado,
      });
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  searchByQuery: async (req, res) => {
    try {
      const { name, sku } = req.query;
      const resultado = await Producto.find({
        name: new RegExp(name, "i"),
        sku: new RegExp(sku, "i"),
      });

      res.status(200).json({
        msg: "resultados de la busqueda",
        data: resultado,
      });
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
};
