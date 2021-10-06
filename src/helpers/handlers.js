const errorHandler = (req, res, error) => {
  console.log(error);
  res.status(400).json({
    msg: "Algo salio mal, intenta de nuevo",
  });
};

module.exports = {
  errorHandler,
};
