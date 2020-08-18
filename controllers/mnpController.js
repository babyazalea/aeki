import Mnp from "../models/Mnp";
import routes from "../routes";
import { installation } from "./installationController";

// mnp home

export const mnp = async (req, res) => {
  try {
    const mnps = await Mnp.find({});
    res.render("mnp", { pageTitle: "Measurement & Planning", mnps });
  } catch (error) {
    console.log(error);
    res.render("mnp", {
      pageTitle: "Measurement & Planning",
      mnp: [],
    });
  }
};

// Search mnp

export const searchMnp = async (req, res) => {
  const {
    query: { term: serchingBy },
  } = req;
  let mnp = [];
  try {
    installation = await installation.find({
      customerName: { $regex: searchingBy, $options: "i" },
    });
  } catch (error) {
    console.log(error);
  }
  res.render("searchMnp", {
    pageTitle: "Search Measurement & Planning",
    serchingBy,
    mnp,
  });
};

// Create Mnp

export const getCreateMnp = (req, res) => {
  const mnp = [];
  res.render("createMnp", {
    pageTitle: "Create Measurement & Planning",
    mnp,
  });
};

export const postCreateMnp = async (req, res) => {
  const {
    body: {
      createDate,
      customerName,
      isellNumber,
      customerPhone,
      address,
      reservationDate,
      siteCondition,
      siteShape,
      freePlanning,
      manager,
      doorName,
      countertop,
      sink,
      tap,
      appliance,
      hood,
      singularityText,
    },
  } = req;

  const newMnp = await Mnp.create({
    createDate,
    customerName,
    isellNumber,
    customerPhone,
    address,
    reservationDate,
    siteCondition,
    siteShape,
    freePlanning,
    manager,
    doorName,
    countertop,
    sink,
    tap,
    appliance,
    hood,
    singularityText,
  });

  res.redirect(routes.mnpDetail(newMnp.id));
};

// Measurement & Planning Detail

export const mnpDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const mnp = await Mnp.findById(id);
    res.render("mnpDetail", {
      pageTitle: "Measurement & Planning Detail",
      mnp,
    });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// Edit Measurement & Planning

export const getEditMnp = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const mnp = await Mnp.findById(id);
    res.render("editMnp", {
      pageTitle: "Edit Measurement & Planning",
      mnp,
    });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postEditMnp = async (req, res) => {
  const {
    params: { id },
    body: {
      createDate,
      customerName,
      isellNumber,
      customerPhone,
      address,
      reservationDate,
      siteCondition,
      siteShape,
      freePlanning,
      manager,
      doorName,
      countertop,
      sink,
      tap,
      appliance,
      hood,
      singularityText,
    },
  } = req;
  try {
    await Mnp.findOneAndUpdate(
      { _id: id },
      {
        createDate,
        customerName,
        isellNumber,
        customerPhone,
        address,
        reservationDate,
        siteCondition,
        siteShape,
        freePlanning,
        manager,
        doorName,
        countertop,
        sink,
        tap,
        appliance,
        hood,
        singularityText,
      }
    );
    res.redirect(routes.mnpDetail(id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// Delete Measurement & Planning

export const deleteMnp = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Mnp.findByIdandRemove({
      _id: id,
    });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
