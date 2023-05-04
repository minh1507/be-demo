import catRoute from "./cat.route.ts";
import authRoute from "./auth.route.ts";
import userRoute from "./user.route.ts"
import fileRoute from "./file.route.ts"
import crawlRoute from "./crawl.route.ts"

export const animalRoutes = (app: any) => {
  catRoute(app);
  authRoute(app)
  userRoute(app)
  fileRoute(app)
  crawlRoute(app)
};


