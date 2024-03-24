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

  async createProduct(informationProduct: IProductInterface): Promise<Product> {
    try {
      const { name, description, value, stock } = informationProduct;
      return Product.create({ name, description, value, stock });
    } catch (error) {
      throw error;
    }
  }

  async searchProductByName(
    informationProduct: IProductInterface
  ): Promise<Product | null> {
    try {
      const { name } = informationProduct;
      const checkExistProduct = await Product.findOne({ where: { name } });
      if (checkExistProduct) {
        throw new Error("Já existe um produto com esse nome");
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}
