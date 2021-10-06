const { Schema, model } = require("mongoose");

const plazoSchema = new Schema(
  {
    plazo: {
      type: Number,
      required: true,
      unique: true,
      min: 1,
    },
    tasaNormal: {
      type: Number,
      required: true,
    },
    tasaPuntual: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = model('Plazo',plazoSchema)