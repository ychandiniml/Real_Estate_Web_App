import express from "express";
// import {
//   deleteUser,
//   getUser,
//   getUsers,
//   updateUser,
//   savePost,
//   profilePosts,
//   getNotificationNumber
// } from "../controllers/userController.js";
import {verifyToken} from "../middleware/verifyToken.js";

const router = express.Router();

// router.get("/", getUsers)s
// router.get("/profilePosts", verifyToken, profilePosts);
// router.get("/notification", verifyToken, getNotificationNumber);

export default router;