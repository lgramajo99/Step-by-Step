const { Router } = require("express");
const { getProducts } = require("../handlers/products");

const productsRouter = Router();

productsRouter.get("/", getProducts);
// productsRouter.get("/:idProduct", getById);
// productsRouter.post("/", createProduct);

module.exports = productsRouter;