import express from "express";
const router = express.Router();
import { getLoginController, postLoginController } from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import loginValidation from "../validations/authValidation.js";

router.get("/", (req, res) => {
  res.redirect("auth/login");
});
router.get("/login", authMiddleware, getLoginController);
router.post("/login", authMiddleware, loginValidation, postLoginController);
export default router;
