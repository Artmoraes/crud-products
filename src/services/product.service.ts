import { IProductService } from "../interfaces/IFunctions/IProductService.interface";
import Product from "../database/models/Product.model";

export default class ProductService implements IProductService {
  getProducts(): Promise<object | null> {
    return Product.findAll();
  }
}
