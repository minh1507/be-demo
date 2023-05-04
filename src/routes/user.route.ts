import express from "express";
import {
  findAll,
  me,
  create,
  findOneById,
  update,
  deleteById,
  info
} from "../controllers/user.controller.ts";
import * as auth from "../middleware/authorization.middleware.ts"

let router = express.Router();

let userRoute = (app: any) => {
  router.get("/", auth.authorizations, findAll);
  router.get("/:id", auth.authorizations, findOneById);
  router.get("/info/pagi", auth.authorizations, info);
  router.post("/", auth.authorizations, create);
  router.patch("/", auth.authorizations, update)
  router.delete("/:id", auth.authorizations, deleteById);
  router.get("/me", me)
 
  return app.use("/api/user", router);
};

export default userRoute;