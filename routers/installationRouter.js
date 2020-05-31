import express from "express";
import routes from "../routes";
import {
  createInstallation,
  installationDetail,
  editInstallation,
  deleteInstallation,
  installation,
  searchInstallation,
} from "../controllers/installationController";

const installationRouter = express.Router();

installationRouter.get(routes.installation, installation);
installationRouter.get(routes.searchInstallation, searchInstallation);
installationRouter.get(routes.createInstallation, createInstallation);
installationRouter.get(routes.installationDetail, installationDetail);
installationRouter.get(routes.editInstallation, editInstallation);
installationRouter.get(routes.deleteInstallation, deleteInstallation);

export default installationRouter;
