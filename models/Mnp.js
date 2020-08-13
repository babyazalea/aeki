import mongoose from "mongoose";

const MnpSchema = new mongoose.Schema({});

const model = mongoose.model("Mnp", MnpSchema);

export default model;
