import Product from "../../database/models/Product.model";
import { IProductInterface } from "../IProduct.interface";

export interface IProductService {
  getProducts(page: number, pageSize: number): Promise<{ products: IProductInterface[], totalItems: number } | null>;
  createProduct(informationProducts: IProductInterface): Promise<Product>;
  verifyProductByName(informationProduct: IProductInterface): Promise<Product | null>;
  getProductById(id: string): Promise<Product>;
  updateProduct(id: string, informationProduct: IProductInterface): Promise<void>;
  deleteProductById(id: string): Promise<void>;
}
