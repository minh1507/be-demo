import { User } from "../entities/user.entities.ts";
import { Role } from "../entities/role.entities.ts";
import { Sequelize } from "sequelize-typescript";
import jwt from "jsonwebtoken";
import { user } from "../models/user.interface.ts";
import { genSaltSync, hashSync } from "bcrypt-ts";
import message from "../common/message/message.common.ts";
import { sequelize } from "../config/connect.database.ts";

export const findAll = async (low: any, high: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data: any = await sequelize.query(`SELECT users.username, users.id, users.date, roles.name as role FROM users LEFT JOIN roles On users.roleId = roles.id ORDER BY users.id DESC LIMIT ${low}, ${high}`);

      resolve(data[0]);
    } catch (error) {
      reject(error);
    }
  });
};

export const info = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data: any = await User.count();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const findOneById = (id: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data: any = await User.findOne({
        where: { id: id },
        include: [
          {
            model: Role,
            attributes: [],
            required: true,
          },
        ],
        attributes: ["id", "username", "roleId", "date"],
        raw: true,
      });
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const me = async (token: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      var decode = jwt.verify(token, process.env.PRIVATE_TOKEN);
      const data: any = await User.findOne({
        where: { username: decode.data.username },
        include: [
          {
            model: Role,
            attributes: [],
            required: true,
          },
        ],
        attributes: ["username", [Sequelize.col("role.name"), "role"]],
        // plain: true,
        raw: true,
      });
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const deleteById = async (id: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await User.findOne({ where: { id: id } });
      if (user) {
        await User.destroy({ where: { id: id } });
      }
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

export const update = async (id: any, username: any, roleId: any, date: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await User.findOne({ where: { id: id } });
      if (user) {
        await User.update(
          {
            username: username,
            roleId: roleId,
            date: date
          },
          { where: { id: id } }
        );
      }
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};
export const create = async (data: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const salt = genSaltSync(10);
      const hashPassword = hashSync(data.password, salt);
      const record = await User.findOne({ where: { username: data.username } });

      if (!record) {
        await User.create({
          username: data.username,
          password: hashPassword,
          date: data.date,
          roleId: data.type,
          accessToken: "",
          refreshToken: "",
        });
        resolve({ mes: message.CREATE_ACCOUNT_SUCCESS });
      }
      resolve({ mes: message.DUBLICATE_RECORD_ACCOUNT });
    } catch (error) {
      reject(error);
    }
  });
};
