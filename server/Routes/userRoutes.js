// import express from "express";
// import path from "path";
// import { verifyEmail } from "../Controllers/userController.js";

// const router = express.Router();
// const __dirname = path.resolve(path.dirname(""));

// router.get("/verify/:userId/:token", verifyEmail);

// router.get("/verified", (req, res) => {
//   res.sendFile(path.join(__dirname, "./views/verifiedpage.html"));
// });

// export default router;

import express from "express";
import path from "path";
import {
  changePassword,
  getUser,
  requestPasswordReset,
  resetPassword,
  verifyEmail,
} from "../Controllers/userController.js";
import { resetPasswordLink } from "../Utils/sendEmail.js";
import userAuth from "../middleware/authMiddleware.js";

const router = express.Router();
const __dirname = path.resolve(path.dirname(""));

router.get("/verify/:userId/:token", verifyEmail);

//Password reset
router.get("/reset-password/:userId/:token", resetPassword);
router.post("/request-passwordreset", requestPasswordReset);
router.post("/reset-password", changePassword);

//user route
router.post("/get-user/:id?", userAuth, getUser);

router.get("/verified", (req, res) => {
  res.sendFile(path.join(__dirname, "./authRoutes.jsViews/build", "index.html"));
});
router.get("/resetpassword", (req, res) => {
  res.sendFile(path.join(__dirname, "./Views/build", "index.html"));
});

export default router;
