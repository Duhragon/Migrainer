import mongoose, { Schema } from "mongoose";

const episodeSchema = new mongoose.Schema(
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
      type: String,
      required: [true, "Duration is required for episodes"],
    },
    symptoms: {
      type: [String],
      required: [true, "Symptoms are required for episodes"],
    },
    activities: {
      type: [String],
      required: [true, "Activities are required for episodes"],
    },
  },
  { timestamps: true }
);

const Episodes = mongoose.model("Episodes", episodeSchema);

export default Episodes;
