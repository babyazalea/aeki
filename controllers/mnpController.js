import Mnp from "../models/Mnp";
import routes from "../routes";
import { installation } from "./installationController";

// mnp home

export const Mnp = async (req, res) => {
  try {
    const mnp = await Mnp.find({});
    res.render("mnp", { pageTitle: "Measurement & Planning", mnp });
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
