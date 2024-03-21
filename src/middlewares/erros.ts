import { NextFunction, Request, Response } from 'express';

async function errorMiddleware(err: Error, _req: Request, res: Response, next: NextFunction) {
  const { status, message } = err as any;

  res.status(status).json({ message });

  next();
};

export default errorMiddleware;
