require("dotenv").config();

const host = process.env.DB_HOST;
const username = process.env.DB_USER;
const database = process.env.DB_NAME;
const timezone = process.env.DB_TIMEZONE

module.exports = {
  development: {
    username,
    database,
    host,
    port: 3306,
    dialect: "mysql",
    query: {
      raw: true,
    },
    timezone: timezone,
  },
};
