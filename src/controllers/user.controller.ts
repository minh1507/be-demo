import { Request, Response } from "express";
import * as service from "../services/user.service.ts";
import { user } from "../models/user.interface.ts";
import * as validator from "../validators/user.validator.ts";
import message from "../common/message/message.common.ts";

export const findAll = async (req: Request, res: Response) => {
  let low = req.query.low;
  let high = req.query.high;
  
  let result = await service.findAll(low, high);
  return res.status(200).json(result);
};

export const info = async (req: Request, res: Response) => {
  let result = await service.info();
  return res.status(200).json(result);
};

export const update = async (req: Request, res: Response) => {
  let { id, username, roleId, date } = req.body;
  if (id && username && roleId) {
    await service.update(id, username, roleId, date);
    return res.status(200).json({ isSuccess: true });
  } else {
    return res
      .status(200)
      .json({ mes: message.INVALID_BODY_VALUE, isSuccess: false });
  }
};

export const deleteById = async (req: Request, res: Response) => {
  let id = req.params.id;
  if (id) {
    await service.deleteById(id);
    return res.status(200).json({isSuccess: true});
  } else {
    return res.status(200).json({isSuccess: false, mes: message.PARAM_NOT_FOUND});
  }
};

export const findOneById = async (req: Request, res: Response) => {
  let id = req.params.id;
  if (id) {
    let result: any = await service.findOneById(id);
    return res.status(200).json({ ...result, isSuccess: true });
  } else {
    return res
      .status(200)
      .json({ mes: message.ACCOUNT_NOT_FOUND, isSuccess: false });
  }
};

export const me = async (req: Request, res: Response) => {
  let authorization = req.headers["authorization"];
  if (authorization) {
    let token = authorization.split(" ")[1];
    if (token) {
      let result = await service.me(token);
      return res.status(200).json(result);
    } else {
      return res.status(401);
    }
  } else {
    return res.status(401);
  }
};

export const create = async (req: Request, res: Response) => {
  let data: user = req.body;
  if (
    validator.formData(data) &&
    validator.password(data) &&
    validator.username(data)
  ) {
    let result: any = await service.create(data);
    return res.status(200).json({ ...result, isSuccess: true });
  }
  return res
    .status(200)
    .json({ mes: message.INVALID_BODY_VALUE, isSuccess: false });
};
