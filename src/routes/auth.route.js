import { Router } from "express";
import passport from "passport";
import { generateToken } from "../utils.js";
import AuthController from "../controllers/auth.controller.js";

const controller = new AuthController();
const router = Router();

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/api/auth/login-failure",
  }),
  controller.login.bind(controller)
);

router.get("/login-failure", controller.loginFailure.bind(controller));

export default router;
