import mongoose from "mongoose";

const InstallationSchema = new mongoose.Schema({
  createDate: {
    type: Date,
    default: Date.now,
  },
  customerName: {
    type: String,
    required: "Custromer Name is required",
  },
  customerPhone: {
    type: Number,
    required: "Phone Number is required",
  },
  isellNumber: {
    type: Number,
    required: "iSell no. is required",
  },
  ihpNumber: {
    type: Number,
    required: "IHP no. is required",
  },
  installationAddress: {
    type: String,
    required: "Address is required",
  },
  reservationDate: {
    type: Date,
    required: "Reservation-Date is required",
  },
  deliveryDate: {
    type: Date,
    required: "Delivery-Date is required",
  },
  installaionDate: {
    type: Date,
    required: "Installation-Date is required",
  },
  installationCost: {
    type: Number,
    required: "Installation-Cost is required",
  },
  cmwDate: Date,
  cmwInstallationCost: Number,
  cmwCost: Number,
  countertop: String,
  sink: String,
  tap: String,
  howToSink: String,
  cooktop: String,
  hood: String,
  lighting: String,
  changeText: String,
  articleNumber: Number,
  articleName: String,
  singularityText: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const model = mongoose.model("Installation", InstallationSchema);
export default model;
