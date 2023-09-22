import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
      minlength: [8, "Password length should be greater than 8 characters"],
      select: true,
    },
    avatar: {
      type: String,
      required: [true, "Avatar is required!"],
    },
    verified: { type: Boolean, default: false },
    episodes: [{ type: Schema.Types.ObjectId, ref: "Episodes" }],
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", userSchema);

export default Users;
