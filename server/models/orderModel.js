import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "products",
      },
    ],
    paymentMethod: {
      type: String,
      required: true,
      enum: ["jazzcash", "easypaisa", "bank"],
    },
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "not process",
      enum: ["not process", "processing", "shipped", "delivered"],
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("order", orderSchema);
