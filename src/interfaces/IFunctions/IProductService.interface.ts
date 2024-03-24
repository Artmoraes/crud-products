import Product from "../../database/models/Product.model";
import { IProductInterface } from "../IProduct.interface";

export interface IProductService {
  getProducts(): Promise<object | null>;
  createProduct(informationProducts: IProductInterface): Promise<Product>;
  getProductByName(informationProduct: IProductInterface): Promise<Product | null>;
  getProductById(id: string): Promise<Product | null>;
}
