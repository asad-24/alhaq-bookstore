import { orderModel } from "../models/orderModel.js";
import { productModel } from "../models/productModel.js";
import fs from "fs";
import handleError from "../utils/handleError.js";

export const createOrder = async (req, res) => {
  try {
    const { paymentMethod, products, totalPrice } = req.body;
    const { screenshot } = req.files;
    const buyer = req.user._id;

    // Validate required fields
    if (!paymentMethod || !products || !totalPrice || !screenshot) {
      return res.status(400).send({ error: "All fields are required" });
    }

    // Validate file size
    if (screenshot.size > 1000000) {
      return res.status(400).send({ error: "Screenshot should be less than 1MB" });
    }

    const newOrder = new orderModel({
      products,
      payment: {
        method: paymentMethod,
        amount: totalPrice,
        screenshot: {
          data: fs.readFileSync(screenshot.path),
          contentType: screenshot.type,
        },
      },
      buyer,
      totalPrice,
    });

    console.log('new order', newOrder)
    await newOrder.save();

    return res.status(201).send({
      success: true,
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error('error creating order', error);
    return handleError(res, 500, "Server Error creating order");
  }
};
