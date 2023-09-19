import mongoose from "mongoose";
import Verification from "../models/emailVerification.js";
import Users from "../models/userModel.js";
import { compareString } from "../Utils/index.js";

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
