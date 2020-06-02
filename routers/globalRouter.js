import express from "express";
import routes from "../routes";
import { installation } from "../controllers/installationController";
import {
  logout,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controllers/userController";
import { home } from "../controllers/homeController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, logout);
globalRouter.get(routes.installation, installation);

export default globalRouter;
