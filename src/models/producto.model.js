const { Schema, model } = require("mongoose");

const productoSchema = new Schema(
  {
    sku: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 128,
    },
    nombre: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 128,
    },
    precio: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Producto", productoSchema);
