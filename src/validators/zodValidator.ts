import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
import { zodErrorHandler } from "../utils/zodErrorParsers";
export function validate(schema: ZodSchema<any>) {
  return function (req: Request, res: Response, next: NextFunction) {
    try {
      schema.parse(req.body);
      next();
    } catch (error: any) {
      res.status(401).json({
        success: false,
        msg: "Body params are wrong",
        error: zodErrorHandler(error)[1],
      });
    }
  };
}
