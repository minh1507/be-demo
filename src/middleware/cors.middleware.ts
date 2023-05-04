import { NextFunction } from "express";

export const blockCors = (req: any, res: any, next: NextFunction) => {
  // const corsWhitelist = ["http://localhost:7000", "http://localhost:3000"];
  // if (corsWhitelist.indexOf(req.headers.origin) != -1) {
  //   res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  //   res.setHeader(
  //     "Access-Control-Allow-Methods",
  //     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  //   );
  //   res.setHeader(
  //     "Access-Control-Allow-Methods",
  //     "Content-Type",
  //     "Authorization"
  //   );
  //   res.setHeader("Access-Control-Allow-Credentials", true);
  //   next();
  // } else {
  //   return res.status(500).json("Server not found");
  // }
  next();
};
