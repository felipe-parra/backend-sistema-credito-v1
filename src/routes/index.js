const router = require("express").Router();
const productosRoutes = require("./productos.routes");
const plazosRoutes = require("./plazos.routes");

router.use('/productos',productosRoutes)
router.use('/plazos',plazosRoutes)

module.exports = router;
