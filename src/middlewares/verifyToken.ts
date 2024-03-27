import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

class JWTToken {
  createToken(): string {
    const secret: string | undefined = process.env.TOKEN;
    if (!secret) {
      throw new Error("Chave secreta não definida.");
    }
    return jwt.sign({}, secret, { expiresIn: "100y" });
  }

  verifyToken(req: Request, _res: Response, next: NextFunction) {
    try {
      const token = req.headers.token as string;
      if (!token) {
        throw new Error("Token não fornecido. Acesso inválido.");
      }

      const secret: string | undefined = process.env.TOKEN;
      if (!secret) {
        throw new Error("Chave secreta não definida.");
      }
      jwt.verify(token, secret);

      return next();
    } catch (err: any | unknown) {
      return next(err);
    }
  }
}

export default new JWTToken();
