import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import swaggerJsDocUi from "../common/json/swaggerDocs.json" assert { type: "json" };
import helmet from "helmet";
import interceptor from "../middleware/inteceptor.middleware.ts";
import path from "path";
import cookieParser from "cookie-parser";

import { fileURLToPath } from "url";

import * as session from "../middleware/session.middleware.ts";
import * as block from "../middleware/cors.middleware.ts";
import * as seq from "../config/connect.database.ts";
import * as routes from "../routes/index.ts";

export default class main {
  private __filename = fileURLToPath(import.meta.url);
  private __dirname = path.dirname(this.__filename);
  private __dirsource = path.join(this.__dirname, "..");
  private port = process.env.ANIMAL_PORT;
  private app: Express = express();

  middleware(app: Express) {
    app.use("/static", express.static(this.__dirsource + "/files"));
    app.set("trust proxy", true);
    app.use(helmet());
    app.use(cors());
    app.use((req: Request, res: Response, next: NextFunction) => {
      block.blockCors(req, res, next);
    }, cors({ maxAge: 84600 }));
    app.use((req: Request, res: Response, next: NextFunction) => {
      interceptor(req, res, next);
    });
    app.use(cookieParser());
    app.use(session.sessions);
    app.use("/apis", swaggerUi.serve, swaggerUi.setup(swaggerJsDocUi));
    app.use(bodyParser.json({ limit: "50000mb" }));
    app.use(bodyParser.urlencoded({ limit: "50000mb", extended: true }));
    app.use(express.static("public"));
  }

  configuration(app:Express){
    routes.animalRoutes(app);
    seq.connectDB();
  }

  broad(app: Express){
    app.listen(this.port, () => {
      console.log(`Domain: ${process.env.ROOT_DOMAIN}:${this.port}`);
    });
  }

  other(){
    dotenv.config();
  }

  run() {
    const app:Express = this.app;
    this.other()
    this.middleware(app);
    this.configuration(app)
    this.broad(app)
  }
}




