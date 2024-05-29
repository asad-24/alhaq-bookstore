import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://asadali:Asad%408825@bookshop.xemede4.mongodb.net/?retryWrites=true&w=majority&appName=BookShop/testing", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`DB is Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error while connecting DB: ${error.message}`);
  }
};
