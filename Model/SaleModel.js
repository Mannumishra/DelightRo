const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.ObjectId,
      ref: "Custmor",
      required: true,
    },
    fieldExcutive: {
      type: mongoose.Schema.ObjectId,
      ref: "Vender",
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    refNumber: {
      type: String,
      required: true,
    },
    services: {
      type: [mongoose.Schema.ObjectId],
      ref: "Service",
      required: true,
    },
    totalDiscount: {
      type: String,
      required: true,
    },
    totalTaxAmount: {
      type: String,
      required: true,
    },
    totalQuantity: {
      type: String,
      required: true,
    },
    subfinaltotal: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: String,
      required: true,
    },
    reciveAmount: {
      type: String,
      required: true,
    },
    billNo: {
      type: String,
    },
    paymentType: {
      type: String,
      required: true,
      enum: ["upi", "netbanking", "cheque", "card", "cash"],
    },
    pdfPath: {
      type: String,
    },
  },
  { timestamps: true }
);

const saleModel = mongoose.model("Sale", saleSchema);

module.exports = saleModel;
