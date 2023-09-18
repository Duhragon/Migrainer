import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
// import { hashString } from ".index.js";
import Verification from "../models/emailVerification.js";
import { hashString } from "./index.js";

dotenv.config();

const { AUTH_EMAIL, AUTH_PASSWORD, APP_URL } = process.env;

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: AUTH_EMAIL,
    pass: "pbkmoxlxtyaidyeo",
  },
});

export const sendVerificationEmail = async (user, res) => {
  const { _id, email, lastName } = user;
  const token = _id + uuidv4();
  const link = APP_URL + "users/verify/" + _id + "/" + token;

  //mail options
  const mailOptions = {
    from: AUTH_EMAIL,
    to: email,
    subject: "Email Verification",
    html: `<div style=" padding: 20px; color: #000; border-radius: 10px;">
      <p style="color: #2f2b3a; font-size: 20px;">Dear ${user.firstName} ${user.lastName},</p>
      <p style=" font-size: 18px;">Thank you for registering with Migrainer.</span> Please click the link below to verify your email:</p>
      <a href=${link} style="display: inline-block; background-color: #1a1625; color: #F4EEE0; padding: 10px 20px; border: 2px solid #F4EEE0; border-radius: 5px; text-decoration: none; font-size: 18px;">Verify Email</a>
      <p style=" font-size: 18px;">This link expires in 1 hour.</p>
      <p style="color: #2f2b3a; font-size: 18px;">Regards,</p>
      <p style="color: #2f2b3a; font-size: 18px;">Team <span style=" background-color: #2f2b3a; color:#F4EEE0 ; padding: 5px; border-radius: 5px; margin:3px">Migrainer.</span></p>
    </div>`,
  };

  try {
    const hashedToken = await hashString(token);

    const newVerifiedEmail = await Verification.create({
      userId: _id,
      token: hashedToken,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000,
    });

    if (newVerifiedEmail) {
      transporter.sendMail(mailOptions).then(() => {
        res.status(201).send({
          success: "PENDING",
          message: "Verification email has been sent to you. Check your inbox",
        });
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
  }
};
