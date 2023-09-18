import mongoose, { Schema } from "mongoose";

const episodeSchema = new mongoose.Schema(
  {
    episodes: [
      {
        userId: { type: Schema.Types.ObjectId, ref: "Users" },
        date: {
          type: Date,
          required: [true, "Date is required for episodes"],
        },
        severity: {
          type: String,
          required: [true, "Severity is required for episodes"],
        },
        duration: {
          type: Number,
          required: [true, "Duration is required for episodes"],
        },
        symptoms: [String],
        activities: [String],
      },
    ],
  },
  { timestamps: true }
);

const Episodes = mongoose.model("Episodes", episodeSchema);

export default Episodes;
