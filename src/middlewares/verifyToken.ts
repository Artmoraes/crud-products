import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import statusCodes from "../utils/statusCode";

class JWTToken {
  createToken(): string {
    const secret: string | undefined = process.env.TOKEN;
    if (!secret) {
      throw new Error("Chave secreta não definida.");
    }
    return jwt.sign({}, secret, { expiresIn: "100y" });
  }

  verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization as string;
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
 console.log("err ", err);
      return res.status(statusCodes.UNAUTHORIZED).json(err);
    }
  }
}

export default new JWTToken();
