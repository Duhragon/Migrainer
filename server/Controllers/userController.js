import mongoose from "mongoose";
import Verification from "../models/emailVerification.js";
import Users from "../models/userModel.js";
import { compareString, hashString } from "../Utils/index.js";
import PasswordReset from "../models/passwordReset.js";
import { resetPasswordLink } from "../Utils/sendEmail.js";

export const verifyEmail = async (req, res) => {
  const { userId, token } = req.params;

  try {
    const result = await Verification.findOne({ userId });

    if (result) {
      const { expiresAt, token: hashedToken } = result;

      //Token expired
      if (expiresAt < Date.now()) {
        Verification.findOneAndDelete({ userId })
          .then(() => {
            Users.findOneAndDelete({ _id: userId })
              .then(() => {
                const message = "Verification token has expired.";
                res.redirect(`/users/verified?status=error&message=${message}`);
              })
              .catch(error => {
                res.redirect("/users/verified?status=error&message=");
              });
          })
          .catch(error => {
            console.log(error);
            res.redirect("/users/verified?status=error&message=");
          });
      } else {
        //token valid
        compareString(token, hashedToken)
          .then(isMatch => {
            if (isMatch) {
              Users.findOneAndUpdate({ _id: userId }, { verified: true })
                .then(() => {
                  Verification.findOneAndDelete({ userId }).then(() => {
                    const message = "Email verified successfully";
                    res.redirect(`/users/verified?status=success&message=${message}`);
                  });
                })
                .catch(err => {
                  console.log(err);
                  const message = "Verification failed or link is invalid.";
                  res.redirect(`/users/verified?status=error&message=${message}`);
                });
            } else {
              const message = "Verificaiton failed or link is invalid";
              res.redirect(`/users/verified?message=${message}`);
            }
          })
          .catch(error => {
            console.log(error);
            res.status(404).json({ message: error.message });
          });
      }
    } else {
      const message = "Invalid verification link. Try again later.";
      res.redirect(`/users/verified?status=error&message=${message}`);
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(404).json({
        status: "FAILED",
        message: "Email address not found.",
      });
    }

    const existingRequest = await PasswordReset.findOne({ email });
    if (existingRequest) {
      if (existingRequest.expiresAt > Date.now()) {
        return res.status(201).json({
          status: "PENDING",
          message: "Reset password link has already been sent to your email address.",
        });
      }
      await PasswordReset.findOneAndDelete({ email });
    }
    await resetPasswordLink(user, res);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  const { userId, token } = req.params;

  try {
    const user = await Users.findById(userId);

    if (!user) {
      const message = "Invalid password reset link. Try again.";
      res.redirect(`/users/resetpassword?status=error&message=${message}`);
    }

    const resetPassword = await PasswordReset.findOne({ userId });
    if (!resetPassword) {
      const message = "Invalid password reset link. Try again.";
      res.redirect(`/users/resetpassword?status=error&message=${message}`);
    }

    const { expiresAt, token: resetToken } = resetPassword;

    if (expiresAt < Date.now()) {
      const message = "Password reset link has expired. Please try again.";
      res.redirect(`/users/resetpassword?status=error&message=${message}`);
    } else {
      const isMatch = await compareString(token, resetToken);

      if (!isMatch) {
        const message = "Invalid reset password link. Try again.";
        res.redirect(`/users/resetpassword?status=error&message=${message}`);
      } else {
        res.redirect(`/users/resetpassword?type=reset&id=${userId}`);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const hashedPassword = await hashString(password);

    const user = await Users.findByIdAndUpdate({ _id: userId }, { password: hashedPassword });

    if (user) {
      await PasswordReset.findOneAndDelete({ userId });
      const message = "Password successfully reset.";
      res.redirect(`/users/resetpassword?status=success&message=${message}`);
      return;
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

// export const getUser = async (req, res, next) => {
//   try {
//     const { userId } = req.body.user;
//     const { id } = req.params;
//     const user = await Users.findById(userId);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "auth error.",
//       success: false,
//       error: error.message,
//     });
//   }
// };

// userController.js

export const getUser = async (req, res, next) => {
  try {
    const { userId } = req.params; // Use req.params to get the userId from the URL
    const user = await Users.findById(userId); // Use the model to query the database

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Customize the user data fields you want to include in the response.
    const userData = {
      user, //returning the entire user object as userData
    };

    res.status(200).json({
      success: true,
      data: userData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
