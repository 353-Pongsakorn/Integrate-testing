"use strict";
// import { Router } from 'express';
// import productController from '../controller/product.controller';
// const productRouter = Router();
// // specifies the endpoint and the method to call
// productRouter.get('/', productController.getAll);
// // export the router
// export default productRouter;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controller/product.controller"); // Assuming the controller file is located in the parent directory of the current file
const productRouter = (0, express_1.Router)();
// Endpoint to get all products
productRouter.get("/", product_controller_1.default.getAll);
// Endpoint to delete a product by ID
productRouter.delete("/:id", product_controller_1.default.deleteById);
// Endpoint to insert a new product
productRouter.post("/", product_controller_1.default.insertProduct);
// Endpoint to update an existing product by ID
productRouter.put("/:id", product_controller_1.default.updateProduct);
exports.default = productRouter;
