import routes from "./routes";

export const loacalsMiddleware = (req, res, next) => {
  res.locals.siteName = "AEKI";
  res.locals.routes = routes;
  next();
};
