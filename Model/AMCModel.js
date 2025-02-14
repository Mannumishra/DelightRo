const mongoose = require("mongoose");

const amcSchema = new mongoose.Schema({
  billNo: {
    type: String,
  },
  type: {
    type: String,
    required: true,
    default: "amc",
    enum: ["amc", "warranty"],
  },
  clientName: {
    type: mongoose.Schema.ObjectId,
    ref: "Custmor",
    required: true,
  },
  userID: {
    type: mongoose.Schema.ObjectId,
    ref: "Vender",
    required: true,
  },
  services: {
    type: mongoose.Schema.ObjectId,
    ref: "ItemService",
    required: true,
  },
  fromDate: {
    type: String,
    required: true,
  },
  toDate: {
    type: String,
    required: true,
  },
  pdfPath: {
    type: String,
  },
});

const amcModel = mongoose.model("AMC", amcSchema);

module.exports = amcModel;
