export const installation = (req, res) =>
  res.render("installation", { pageTitle: "Installation" });
export const searchInstallation = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("searchInstallation", {
    pageTitle: "Search Installation",
    searchingBy,
  });
};
export const createInstallation = (req, res) =>
  res.render("createInstallation", { pageTitle: "Create Installation" });
export const installationDetail = (req, res) =>
  res.render("installationDetail");
export const editInstallation = (req, res) =>
  res.render("editInstallation", { pageTitle: "Edit Installation" });
export const deleteInstallation = (req, res) =>
  res.render("deleteInstallation", { pageTitle: "Delete Installation" });
