import multer from "multer";
import routes from "./routes";
import date from "date-format";

const multerInstallation = multer({ dest: "uploads/installations/" });

export const loacalsMiddleware = (req, res, next) => {
  res.locals.siteName = "AEKI";
  res.locals.routes = routes;

  res.locals.dateFormatter = date;
  res.locals.currentDate = date.asString("yyyy-MM-dd", new Date());

  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};

export const uploadInstallation = multerInstallation.array();
