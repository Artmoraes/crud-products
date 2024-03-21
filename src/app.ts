import express from 'express';
import "express-async-errors";
import errorMiddleware from "./middlewares/erros";

class App {
  app: express.Express;

  constructor() {
    this.app = express();
    this.#config();
  };

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
    this.app.use(accessControl);
    // Rota principal para mostrar o início da API
    this.app.get('/', (_req, res) => res.json({ OK: true }));

    this.app.use(errorMiddleware);
  };

  start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`LINK API - http://localhost:${PORT}`));
  };
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
