const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require("../controllers/plazo.controller");

const router = require("express").Router();

// getAll
router.get("/", getAll);
// getOne
router.get("/:plazoId", getOne);
// create
router.post("/", createOne);
// update
router.put("/:plazoId", updateOne);
// delete
router.delete("/:plazoId", deleteOne);

module.exports = router;
