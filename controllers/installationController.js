import { countertops } from "../fakeDb";
import Installation from "../models/Installation";
import routes from "../routes";
import date from "date-format";

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
  const installation = [];
  res.render("createInstallation", {
    pageTitle: "Create Installation",
    countertops,
    installation,
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
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getEditInstallation = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const installation = await Installation.findById(id);
    res.render("editInstallation", {
      pageTitle: "Edit Installation",
      countertops,
      installation,
    });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
export const postEditInstallation = async (req, res) => {
  const {
    params: { id },
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
  try {
    await Installation.findOneAndUpdate(
      { _id: id },
      {
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
      }
    );
    res.redirect(routes.installationDetail(id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const deleteInstallation = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Installation.findByIdAndRemove({
      _id: id,
    });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
