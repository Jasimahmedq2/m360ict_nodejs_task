import express from "express";
import { AuthUserControllers } from "./auth.controller";

import { AuthValidationSchema } from "./auth.validation";
import ValidateRequest from "../../middleware/validateRequest";

const router = express.Router();

router.post(
  "/register",
  ValidateRequest(AuthValidationSchema.CreateUser),
  AuthUserControllers.createUser
);

router.post(
  "/logIn",
  ValidateRequest(AuthValidationSchema.logInUser),
  AuthUserControllers.LogIn
);




export const AuthRoutes = router;
