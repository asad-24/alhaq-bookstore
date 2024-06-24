import JWT from "jsonwebtoken";
import { userModel } from "../models/users.js";

// protected Router

// export const requireSignIn = (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader) {
//       console.error('Authorization header missing');
//       return res.status(401).send({ error: "Authorization header missing" });
//     }

//     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njc5NDcwOTRiNzczZTc5NDAxZDgwNTgiLCJpYXQiOjE3MTkyMjQwODUsImV4cCI6MTcxOTgyODg4NX0.NmlVmkrQN_jBeZ7O8M8QHxvVvRtmOnqQF2PpfUatZcU";

//     if (!token) {
//       console.error('Token missing from authorization header');
//       return res.status(401).send({ error: "Token missing from authorization header" });
//     }
//     const decode = JWT.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njc5NDcwOTRiNzczZTc5NDAxZDgwNTgiLCJpYXQiOjE3MTkyMjQwODUsImV4cCI6MTcxOTgyODg4NX0.NmlVmkrQN_jBeZ7O8M8QHxvVvRtmOnqQF2PpfUatZcU", "9873492898wdj9ajhsdf");
//     req.user = decode;
//     // console.log('decode', decode)
//     next();
//   } catch (error) {
//     console.error('JWT verification error:', error.message);
//     res.status(401).send({ error: "Unauthorized access" });
//   }
// };


export const requireSignIn = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).send({ error: "Token missing from cookies" });
    }

    const decode = JWT.verify(token, "9873492898wdj9ajhsdf");
    req.user = decode;
    next();
  } catch (error) {
    console.error('JWT verification error:', error.message);
    res.status(401).send({ error: "Unauthorized access" });
  }
};

// isAdmin

// export const isAdmin = async (req, res, next) => {
//   try {
//     const users = await userModel.findById(req.user._id);
//     console.log(users.role);
//     if (users.role === 1) {

//       return next();
//     } else {
//       res.status(401).send({
//         success: false,
//         message: "unAuthorize to get dashboard",
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({
//       success: false,
//       message: "Internal server error",
//     });
//   }
// };


export const isAdmin = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized access - no user information",
      });
    }

    const user = await userModel.findById(req.user._id);
    if (user.role === 1) {
      next();
    } else {
      res.status(401).send({
        success: false,
        message: "Unauthorized to access dashboard",
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