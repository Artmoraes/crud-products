import { container } from "tsyringe";
import ProductService from "../services/product.service";
import { IProductService } from "../interfaces/IFunctions/IProductService.interface";
// import Product from "../database/models/Product.model";

container.registerSingleton<IProductService>("ProductService", ProductService);
// container.registerSingleton<Product>("Product", Product);