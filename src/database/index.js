const mongoose = require("mongoose");
const { config } = require("../config");

mongoose.Promise = global.Promise;

mongoose
  .connect(config.dbMongoUri)
  .then((db) => {
    console.log(`Connected to MongoDB: ${db.connections[0].name}`);
  })
  .catch((err) => {
    console.error("Error ", err);
  });
