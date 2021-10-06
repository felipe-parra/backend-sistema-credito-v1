const express = require("express");
const cors = require("cors");

require("./database");

const routes = require("./routes");

const app = express();

app.use(
  cors({
    // pending config
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/v1',routes);

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;
