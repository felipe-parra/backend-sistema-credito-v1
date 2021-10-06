const router = require("express").Router();
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
  searchByQuery,
} = require("../controllers/producto.controller");

// Search
router.get("/search?", searchByQuery);

// getAll
router.get("/", getAll);
// getOne
router.get("/:productId", getOne);
// create
router.post("/", createOne);
// update
router.put("/:productId", updateOne);
// delete
router.delete("/:productId", deleteOne);
module.exports = router;
