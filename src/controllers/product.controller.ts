import { NextFunction, Request, Response } from "express";
import { IProductService } from "../interfaces/IFunctions/IProductService.interface";
import statusCodes from "../utils/statusCode";

class ProductController {
  constructor(private productService: IProductService) {}

  async getProducts(_req: Request, res: Response, next: NextFunction) {
    try {
      const products = await this.productService.getProducts();
      return res.status(statusCodes.OK).json(products);
    } catch (error) {
      console.error("error ", error);
      next(error);
    }
  }
}

export default ProductController;
