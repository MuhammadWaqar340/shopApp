const express = require("express");
const router = express.Router();

const product_controller = require("../controllers/product.controller");

router.post("/create", product_controller.product_create);
router.get("/", product_controller.product_findAll);
router.get("/:id", product_controller.product_findOne);

module.exports = router;
