import session from "express-session";
import dotenv from "dotenv";

dotenv.config();
export var sessions = session({
  secret: process.env.PRIVATE_TOKEN,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 100,
  },
});
