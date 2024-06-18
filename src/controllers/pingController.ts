import { Response } from "express";

export const pingCheck = (_, res: Response) => {
  res.status(200).json({ success: true, message: "Server is working" });
};
