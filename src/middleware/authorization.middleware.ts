import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../entities/user.entities.ts";

export const authorizations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let authorization = req.headers["authorization"];

    if (authorization) {
      let token = authorization.split(" ");
      if (token.length === 2 && token[0] == "Bearer") {
        var decoded = jwt.verify(token[1], process.env.PRIVATE_TOKEN);
        let record = await User.findOne({
          where: { username: decoded.data.username },
        });

        if (record && record.accessToken == token[1]) {
          return next();
        }
        return res
          .status(401)
          .json({ mes: "You do not have permission to access this data." });
      }
      return res
        .status(401)
        .json({ mes: "You do not have permission to access this data." });
    }
    return res
      .status(401)
      .json({ mes: "You do not have permission to access this data." });
  } catch (error) {
    return res
      .status(401)
      .json({ mes: "You do not have permission to access this data." });
  }
};
