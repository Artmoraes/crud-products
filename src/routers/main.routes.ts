import ProductController from "../controllers/product.controller";
import ProductService from "../services/product.service";

const productService = new ProductService();
const productController = new ProductController(productService);

export { productController };
