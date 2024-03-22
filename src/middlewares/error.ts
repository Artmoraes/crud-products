import { NextFunction, Request, Response } from "express";
import statusCodes from "../utils/statusCode";

async function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  return res.status(statusCodes.BAD_REQUEST).json({ message: err.message });
}

export default errorMiddleware;
