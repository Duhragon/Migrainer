import { hashString } from "../Utils/index.js";
import { sendVerificationEmail } from "../Utils/sendEmail.js";
import Users from "../models/userModel.js";

export const register = async (req, res, next) => {
  const { firstName, lastName, email, password, avatar } = req.body;

  if (!firstName || !lastName || !email || !password || !avatar) {
    next("Provide required fields!");
    return;
  }
  try {
    const userExist = await Users.findOne({ email });
    if (userExist) {
      next("Email address already exists!");
      return;
    }

    const hashedPassword = await hashString(password);

    const user = await Users.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      avatar,
    });

    //send Email to user
    sendVerificationEmail(user, res);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    //validation
    if (!email || !password) {
      next("Provide correct credentials!");
      return;
    }

    //find user by email
    const user = await Users.findOne({ email }).select("+password");

    if (!user) {
      next("Invalid email or password");
      return;
    }

    if (!user?.verified) {
      next("User email is not verified. Check your email account and verify your email");
      return;
    }

    const isMatch = await compareString(password, user?.password);

    if (!isMatch) {
      next("Invalid email or password");
      return;
    }

    user.password = undefined;
    const token = createJWT(user?._id);

    res.status(201).json({
      success: true,
      message: "Login successfully!",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
