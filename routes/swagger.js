const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger.json");

router.use("/swagger", swaggerUi.serve);
router.get("/swagger", swaggerUi.setup(swaggerFile));
