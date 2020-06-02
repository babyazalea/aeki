import routes from "./routes";

export const loacalsMiddleware = (req, res, next) => {
  res.locals.siteName = "AEKI";
  res.locals.routes = routes;
  res.locals.currentDate = new Date().toISOString().slice(0, 10);
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};
