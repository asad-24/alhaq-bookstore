import JWT from "jsonwebtoken";
import { userModel } from "../models/users.js";

// protected Router

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = await JWT.verify(
      req.headers.authorization,
      '9873492898wdj9ajhsdf'
    );
    req.user = await decode;
    await next();
  } catch (error) {
    res.status(401).send({ error: "Unauthorizediamasad" });
  }
};
 
// isAdmin

export const isAdmin = async (req, res, next) => {
  try {
    const users = await userModel.findById(req.user._id);
    console.log(users.role);
    if (users.role === 1) {
      
      return next();
    } else {
      res.status(401).send({
        success: false,
        message: "unAuthorize to get dashboard",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};
