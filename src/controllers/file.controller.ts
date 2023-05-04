import { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __dirsource = path.join(__dirname, "..", "files");

export const file = async (req: any, res: Response) => {
  return res.status(200).json({
    Success: true,
  });
};

export const fileByName = async (req: any, res: Response) => {
  let name = req.params
  let url = `https://localhost:4000/static/png/${name.id}`
  return res.status(200).json(url);
};
