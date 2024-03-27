import { NextFunction, Request, Response } from "express";

async function verifyToken(req: Request, _res: Response, next: NextFunction) {
  try {
    if (req.headers.token !== process.env.TOKEN) {
      throw new Error("Acesso inválido");
    }

    return next();
  } catch (err: any | unknown) {
    return next(err);
  }
}

export default verifyToken;
