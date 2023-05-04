import { cat,catWithId } from "../models/cat.interface";
import { Cat } from "../entities/cat.entities.ts";

export const findAll = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Cat.findAll();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const findPath = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Cat.findAll({
        attributes : ["id"],
      });
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const findById = async (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Cat.findOne({where: {id:id}})
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const create = async (name: any, age: any, fileName: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {
        name: name,
        age: age,
        fileUrl: "/static/png/" + fileName
      }
      await Cat.create({
        name: name,
        age: age,
        fileUrl: "/static/png/" + fileName
      })
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const deleteById= async (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const record = await Cat.findByPk(id)
      if(record)
      {
        await Cat.destroy({where: {id}})
        resolve({mes: "Success"});
      }
      resolve({mes: "Failed"});
    } catch (error) {
      reject(error);
    }
  });
};

export const update = async (id: any, data: cat) => {
  return new Promise(async (resolve, reject) => {
    try {
      await Cat.update(data, {where: {id: id}})
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};