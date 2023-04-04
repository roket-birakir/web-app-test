import express from "express";
const router = express.Router();
import { getLoginController } from "../controllers/authController.js";

router.get("/", (req, res) => {
  res.redirect("auth/login");
});
router.get("/login", getLoginController);

export default router;
