import Product from "../../database/models/Product.model";
import { IProductInterface } from "../IProduct.interface";

export interface IProductService {
  getProducts(): Promise<object | null>;
  createProduct(informationProducts: IProductInterface): Promise<Product>;
  searchProductByName(informationProduct: IProductInterface): Promise<Product | null>;
}
