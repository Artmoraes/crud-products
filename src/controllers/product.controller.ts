import { NextFunction, Request, Response } from "express";
import { IProductService } from "../interfaces/IFunctions/IProductService.interface";
import statusCodes from "../utils/statusCode";
import createProductSchema from "../validator/product/createProduct.validator";
import updateProductSchema from "../validator/product/updateProduct.validator";
import { inject, injectable } from "tsyringe";

@injectable()
class ProductController {
  constructor(@inject("ProductService") private productService: IProductService) {}

  async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const page: number = parseInt(req.query.page as string) || 1;
      const pageSize: number = parseInt(req.query.pageSize as string) || 10;
      const result = await this.productService.getProducts(page, pageSize);
      return res.status(statusCodes.OK).json(result);
    } catch (error) {
      console.error("error getProducts =>", error);
      next(error);
    }
  }

  async getProductById(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await this.productService.getProductById(req.params.id);
      return res.status(statusCodes.OK).json(products);
    } catch (error) {
      console.error("error getProductById =>", error);
      next(error);
    }
  }

  async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const infoProducts = createProductSchema.parse(req.body);
      await this.productService.verifyProductByName(infoProducts);
      await this.productService.createProduct(infoProducts);
      return res.status(statusCodes.OK).json({ message: "Produto inserido com sucesso!" });
    } catch (error) {
      console.error("error createProduct =>", error);
      next(error);
    }
  }

  async updateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const infoProductsChecked = updateProductSchema.parse(req.body);
      const idProduct = req.params.id;
      await this.productService.updateProduct(idProduct, infoProductsChecked);
      return res.status(statusCodes.OK).json({ message: "Produto atualizado com sucesso!" });
    } catch (error) {
      console.error("error updateProduct =>", error);
      next(error);
    }
  }

  async deleteProductById(req: Request, res: Response, next: NextFunction) {
    try {
      await this.productService.deleteProductById(req.body.id);
      return res.status(statusCodes.OK).json({ message: "Produto deletado com sucesso!" });
    } catch (error) {
      console.error("error deleteProductById =>", error);
      next(error);
    }
  }
}

export default ProductController;
