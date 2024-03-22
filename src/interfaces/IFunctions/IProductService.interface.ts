export interface IProductService {
  getProducts(): Promise<object | null>;
}
