import * as service from "../services/crawl.service.ts";
import { Request, Response } from "express";

export const generate = async (req: any, res: Response) => {
  await service.generate()
  return res.status(200).json({
    Success: true
  });
};
