import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import { createEpisode, deleteEpisode, getEpisodes } from "../Controllers/episodeController.js";

const episodeRoute = express.Router();

//create episode
episodeRoute.post(`/create-episode`, userAuth, createEpisode);

//get episodes
// episodeRoute.post(`/`, userAuth, getEpisodes);
episodeRoute.post(`/get-episodes`, userAuth, getEpisodes);

//delete episode
episodeRoute.delete("/:id", userAuth, deleteEpisode);

export default episodeRoute;
