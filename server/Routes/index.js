import express from "express";
import authRoute from "./authRoutes.js";
import userRoute from "./userRoutes.js";
import episodeRoute from "./episodesRoute.js";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/users", userRoute); //for user data fetching
router.use("/episodes", episodeRoute);
export default router;
