import { IProductService } from "../interfaces/IFunctions/IProductService.interface";
import Product from "../database/models/Product.model";
import { IProductInterface } from "../interfaces/IProduct.interface";

export default class ProductService implements IProductService {
  getProducts(): Promise<object | null> {
    try {
      return Product.findAll();
    } catch (error) {
      throw error;
    }
  }

  async createProduct(
    informationProducts: IProductInterface
  ): Promise<Product> {
    try {
      const { name, description, value, stock } = informationProducts;
      return Product.create({ name, description, value, stock });
    } catch (error) {
      throw error;
    }
  }
}
