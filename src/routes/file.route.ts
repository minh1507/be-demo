import express from "express";
import {
  file,
  fileByName
} from "../controllers/file.controller.ts";

let router = express.Router();

let fileRoute = (app: any) => {
  router.post("/create", file);
  router.get("/:id", fileByName);
  return app.use("/api/file", router);
};

export default fileRoute;
