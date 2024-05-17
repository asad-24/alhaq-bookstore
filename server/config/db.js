import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://asadali:Asad%408825@bookshop.xemede4.mongodb.net/?retryWrites=true&w=majority&appName=BookShop/testing");
    console.log(`DB is Connected ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Error while connecting DB ${error}`);
  }
};

// export default connectDB;
