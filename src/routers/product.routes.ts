import { Router } from "express";
import { productController } from "./main.routes";

const router = Router();

router.get("/", (req, res, next) =>
  productController.getProducts(req, res, next)
);

export default router;
