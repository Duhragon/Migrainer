import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import { createEpisode, deleteEpisode } from "../Controllers/episodeController.js";

const episodeRoute = express.Router();

//create episode
episodeRoute.post(`/create-episode`, userAuth, createEpisode);

//delete episode
episodeRoute.delete("/:id", userAuth, deleteEpisode);

export default episodeRoute;
