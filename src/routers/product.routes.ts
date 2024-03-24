import { Router } from "express";
import { productController } from "./main.routes";

const router = Router();

router.get("/", (req, res, next) =>
  productController.getProducts(req, res, next)
);

router.get("/:id", (req, res, next) =>
  productController.getProductById(req, res, next)
);


router.post("/", (req, res, next) => 
  productController.createProduct(req, res, next)
);

// router.put("/:id", (req, res, next) => 
//   productController.createProduct(req, res, next)
// );

export default router;
