import { installations, countertops } from "../db";
export const installation = (req, res) => {
  res.render("installation", { pageTitle: "Installation", installations });
};

export const searchInstallation = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("searchInstallation", {
    pageTitle: "Search Installation",
    searchingBy,
  });
};

export const getCreateInstallation = (req, res) => {
  res.render("createInstallation", {
    pageTitle: "Create Installation",
    countertops,
  });
};
export const postCreateInstallation = (req, res) => {
  const { body } = req;
};

export const installationDetail = (req, res) =>
  res.render("installationDetail");
export const editInstallation = (req, res) =>
  res.render("editInstallation", { pageTitle: "Edit Installation" });
export const deleteInstallation = (req, res) =>
  res.render("deleteInstallation", { pageTitle: "Delete Installation" });
