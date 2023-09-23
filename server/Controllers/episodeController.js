import Episodes from "../models/episodeModel.js";
import Users from "../models/userModel.js";

export const createEpisode = async (req, res, next) => {
  try {
    const { userId } = req.body.user;
    // const { userId } = req.user;
    const { duration, severity, symptoms, activities, date } = req.body;

    if (!duration || !severity || !symptoms || !activities || !date) {
      next("Please provide the required details.");
      return;
    }

    // Create the episode
    const episode = await Episodes.create({
      userId,
      duration,
      severity,
      symptoms,
      activities,
      date,
    });

    // Use populate to automatically populate the episodes in the user document
    const user = await Users.findById(userId).populate({
      path: "episodes",
      select: "duration severity symptoms activities date",
    });
    user.episodes.push(episode);

    // Save the user document
    await user.save();
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      success: true,
      message: "Episode submitted.",
      episode,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const getEpisodes = async (req, res, next) => {
  try {
    const { userId } = req.body.user;

    // Find the user by their ID
    const user = await Users.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Fetch episodes for the current user
    const episodes = await Episodes.find({ userId }).populate({
      path: "episodes",
      select: "duration severity date activities symptoms",
    });

    res.status(200).json({
      success: true,
      episodes,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteEpisode = async (req, res, next) => {
  try {
    const { userId } = req.body.user;

    const { id } = req.params;
    const episodeId = await Episodes.findByIdAndDelete(id);

    const user = await Users.findById(userId).populate("episodes");
    user.episodes = user.episodes.filter(ep => ep.toString() !== episodeId);

    // Save the user document to reflect the removal
    await user.save();

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
