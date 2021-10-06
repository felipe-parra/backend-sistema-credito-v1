require("dotenv").config();

const config = {
  port: process.env.PORT,
  dbMongoUri: process.env.DB_MONGO_URI,
};

module.exports = {
  config,
};
