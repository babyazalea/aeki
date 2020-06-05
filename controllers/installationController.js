import { countertops } from "../fakeDb";
import Installation from "../models/Installation";
import routes from "../routes";

export const installation = async (req, res) => {
  try {
    const installations = await Installation.find({});
    res.render("installation", { pageTitle: "Installation", installations });
  } catch (error) {
    console.log(error);
    res.render("installation", {
      pageTitle: "Installation",
      installations: [],
    });
  }
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
export const postCreateInstallation = async (req, res) => {
  const {
    body: {
      createDate,
      customerName,
      customerPhone,
      isellNumber,
      ihpNumber,
      installationAddress,
      reservationDate,
      deliveryDate,
      installaionDate,
      installationCost,
      cmwDate,
      cmwInstallationCost,
      cmwCost,
      countertop,
      sink,
      tap,
      howToSink,
      cooktop,
      hood,
      lighting,
      changeText,
      unfinished,
      articleNumber,
      articleName,
      singularityText,
    },
  } = req;
  const newInstallation = await Installation.create({
    createDate,
    customerName,
    customerPhone,
    isellNumber,
    ihpNumber,
    installationAddress,
    reservationDate,
    deliveryDate,
    installaionDate,
    installationCost,
    cmwDate,
    cmwInstallationCost,
    cmwCost,
    countertop,
    sink,
    tap,
    howToSink,
    cooktop,
    hood,
    lighting,
    changeText,
    unfinished,
    articleNumber,
    articleName,
    singularityText,
  });
  console.log(newInstallation);

  res.redirect(routes.installationDetail(newInstallation.id));
};

export const installationDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const installation = await Installation.findById(id);
    res.render("installationDetail", {
      pageTitle: "Installation Detail",
      installation,
    });
    console.log(installation);
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
export const editInstallation = (req, res) =>
  res.render("editInstallation", { pageTitle: "Edit Installation" });
export const deleteInstallation = (req, res) =>
  res.render("deleteInstallation", { pageTitle: "Delete Installation" });
