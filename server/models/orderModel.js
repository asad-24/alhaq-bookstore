import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "products",
        required: true,
      },
    ],
    payment: {
      type: {
        method: { type: String, required: true }, // Payment method (e.g., JazzCash, EasyPaisa, Bank Transfer)
        screenshot: { data: Buffer, contentType: String }, // Payment screenshot
        amount: { type: Number, required: true }, // Payment amount
        transactionId: { type: String }, // Transaction ID, if available
      },
      required: true,
    },
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
      required: true,
    },
    status: {
      type: String,
      default: "not processed",
      enum: ["not processed", "processing", "shipped", "delivered"],
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const orderModel = mongoose.model("order", orderSchema);
