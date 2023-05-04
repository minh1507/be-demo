import express from "express";
import {
  generate
} from "../controllers/crawl.controller.ts";

let router = express.Router();

let crawlRoute = (app: any) => {
  router.post("/", generate);
  return app.use("/api/generate", router);
};

export default crawlRoute;
