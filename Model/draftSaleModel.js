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
    services: [
      {
        item: {
          type: mongoose.Schema.ObjectId,
          ref: "Service",
          required: true,
        },
        serviceName: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        rate: {
          type: Number,
          required: true,
        },
        unit: {
          type: String,
          required: true,
        },
        subTotal: {
          type: Number,
          required: true,
        },
        discountAmount: {
          type: Number,
          required: true,
        },
        discountPercent: {
          type: Number,
          required: true,
        },
        taxType: {
          type: String,
          required: true,
          default: "CGST/SGST",
          enum: ["CGST/SGST", "IGST"],
        },
        taxAmount: {
          type: Number,
          required: true,
        },
        totalAmount: {
          type: Number,
          required: true,
        },
      },
    ],
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
