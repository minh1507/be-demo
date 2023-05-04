import { Sequelize } from "sequelize-typescript";
import { Cat } from "../entities/cat.entities.ts";
import { User } from "../entities/user.entities.ts";
import { Role } from "../entities/role.entities.ts";

const host = process.env.DB_HOST;
const database = process.env.DB_NAME;
const username = process.env.DB_USER;

export const sequelize = new Sequelize(database as string, username as string, undefined, {
  host: host,
  dialect: "mysql",
  username: process.env.DB_USER,
  logging: false,
  models: [Cat, User, Role]
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

