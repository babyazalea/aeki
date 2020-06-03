import express from "express";
import routes from "../routes";
import {
  installationDetail,
  editInstallation,
  deleteInstallation,
  searchInstallation,
  getCreateInstallation,
  postCreateInstallation,
} from "../controllers/installationController";
import { uploadInstallation } from "../middlewares";

const installationRouter = express.Router();

installationRouter.get(routes.searchInstallation, searchInstallation);

installationRouter.get(routes.createInstallation, getCreateInstallation);
installationRouter.post(
  routes.createInstallation,
  uploadInstallation,
  postCreateInstallation
);

installationRouter.get(routes.editInstallation, editInstallation);
installationRouter.get(routes.deleteInstallation, deleteInstallation);
installationRouter.get(routes.installationDetail(), installationDetail);

export default installationRouter;
