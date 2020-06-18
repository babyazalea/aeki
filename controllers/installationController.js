import { countertops, doors } from "../fakeDb";
import Installation from "../models/Installation";
import routes from "../routes";
import date from "date-format";

// Installation Home

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

// Search Installation

export const searchInstallation = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  let installations = [];
  try {
    installations = await Installation.find({
      customerName: { $regex: searchingBy, $options: "i" },
    });
  } catch (error) {
    console.log(error);
  }
  res.render("searchInstallation", {
    pageTitle: "Search Installation",
    searchingBy,
    installations,
  });
};

// Create Installation

export const getCreateInstallation = (req, res) => {
  const installation = [];
  res.render("createInstallation", {
    pageTitle: "Create Installation",
    countertops,
    doors,
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
      doorName,
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
    doorName,
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

// Installation Detail

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

// Edit Installation

export const getEditInstallation = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const installation = await Installation.findById(id);
    res.render("editInstallation", {
      pageTitle: "Edit Installation",
      countertops,
      doors,
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
      doorName,
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
        doorName,
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

// Delete Installation

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
