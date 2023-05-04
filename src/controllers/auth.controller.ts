import { Request, Response } from "express";
import message from "../common/message/message.common.ts";
import { user, userWithRefresh } from "../models/user.interface";
import * as validator from "../validators/user.validator.ts";
import * as service from "../services/auth.service.ts";

export const register = async (req: Request, res: Response) => {
  let data:user = req.body;
  if (validator.formData(data) && validator.password(data) && validator.username(data)) {
    let result:any = await service.register(data)
    return res.status(200).json({...result, isSuccess: true});
  }
  return res.status(200).json({ mes: message.INVALID_BODY_VALUE, isSuccess: false });
};

export const login = async (req: Request, res: Response) => {
  let data:user=req.body;
  if(validator.formData(data)){
    let result:any = await service.login(data);
    if(!result.errCode){
      return res.status(200).json({...result.data, isSuccess: true});
    }
    if(result.errCode == 2){
      return res.status(200).json({ mes: result.mes, isSuccess: false });
    }
    return res.status(200).json({ mes: message.WRONG_ACCOUNT, isSuccess: false });
  }
  return res.status(200).json({ mes: message.INVALID_BODY_VALUE, isSuccess: false });
};

export const refresh = async (req: Request, res: Response) => {
  let data: userWithRefresh = req.body;
  if(validator.refreshTK(data)){
    let result:any = await service.refreshTK(data)
    if(!result.errCode){
      return res.status(200).json(result.data);
    }
    return res.status(400).json({mes: message.WRONG_USERNAME_REFRESHTK});
  }
  return res.status(400).json({ mes: message.INVALID_BODY_VALUE });
}
