import express from "express";
import routes from "../routes";
import { installation } from "../controllers/installationController";
import { join, login, logout } from "../controllers/userController";
import { home } from "../controllers/homeController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.installation, installation);

export default globalRouter;
