import { Router } from "express";
import { container } from "tsyringe";
import ProductController from "../controllers/product.controller";

const router = Router();

const productController = container.resolve(ProductController);

router.get("/", (req, res, next) => {
  productController.getProducts(req, res, next)
});

router.get("/:id", (req, res, next) =>
  productController.getProductById(req, res, next)
);

router.post("/", (req, res, next) =>
  productController.createProduct(req, res, next)
);

router.put("/:id", (req, res, next) =>
  productController.updateProduct(req, res, next)
);

router.delete("/", (req, res, next) =>
  productController.deleteProductById(req, res, next)
);

export default router;
