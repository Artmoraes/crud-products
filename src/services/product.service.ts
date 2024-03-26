import { IProductService } from "../interfaces/IFunctions/IProductService.interface";
import Product from "../database/models/Product.model";
import { IProductInterface } from "../interfaces/IProduct.interface";

export default class ProductService implements IProductService {
  getProducts(): Promise<Product[] | null> {
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

  async verifyProductByName(
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

  async getProductById(id: string): Promise<Product> {
    try {
      const product: Product | null = await Product.findByPk(id);
      if (!product) {
        throw new Error("Produto não existe ou não foi encontrado");
      }
      return product;
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(
    id: string,
    informationProduct: IProductInterface
  ): Promise<void> {
    try {
      const { name, description, value, stock } = informationProduct;
      await Product.update({ name, description, value, stock }, { where: { id } });
    } catch (error) {
      throw error;
    }
  }

  async deleteProductById(id: string): Promise<void> {
    try {
      const product: Product | null = await this.getProductById(id);
      await product.destroy();
    } catch (error) {
      throw error;
    }
  }
}
