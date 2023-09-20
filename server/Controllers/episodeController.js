import Episodes from "../models/episodeModel.js";
import Users from "../models/userModel.js";

export const createEpisode = async (req, res, next) => {
  try {
    const { userId } = req.body.user;
    const { duration, severity, symptoms, activities, date } = req.body;
    const user = await Users.findById(userId);
    // const user = await Users.findById(userId).populate({
    //   path: "episodes",
    //   select: "duration severity symptoms activities date",
    // });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!duration || !severity || !symptoms || !activities || !date) {
      next("Please provide the required details.");
      return;
    }

    const episode = await Episodes.create({
      userId,
      duration,
      severity,
      symptoms,
      activities,
      date,
    });

    user.episodes.push(episode);
    await user.save();

    res.status(200).json({
      success: true,
      message: "Episode submitted.",
      data: episode,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const deleteEpisode = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Episodes.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
