import "reflect-metadata";
import "./providers";
import "express-async-errors";
import express from "express";
import errorMiddleware from "./middlewares/error";
import statusCodes from "./utils/statusCode";
import productsRouters from "./routers/product.routes";
import JWTToken from "./middlewares/verifyToken";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger/swagger.json"

class App {
  app: express.Express;
  constructor() {
    this.app = express();
    this.#config();
  }

  #config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Methods",
        "GET,POST,DELETE,OPTIONS,PUT,PATCH"
      );
      res.header("Access-Control-Allow-Headers", "*");
      next();
    };

    this.app.use(express.json());
    this.app.use(express.static('public'));
    this.app.use(accessControl);

    // Rota principal para mostrar o início da API (SERVE APENAS PARA TESTE)
    this.app.get("/", (_req, res) =>
      res
        .status(statusCodes.OK)
        .json({ message: "Welcome to the API of Products" })
    );
    this.app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    this.app.use("/products", JWTToken.verifyToken, productsRouters);
    // this.app.use((_req: Request, res: Response, _next: NextFunction) => {
    //   res.status(404).json({ message: 'Rota não encontrada' });
    // });
    this.app.use(errorMiddleware);
  }

  start(PORT: string | number): void {
    this.app.listen(PORT, () =>
      console.log(`LINK API - http://localhost:${PORT}`)
    );
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
