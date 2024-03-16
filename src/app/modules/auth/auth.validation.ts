import { z } from "zod";
import { UserRoleConstant } from "./auth.constant";

const CreateUser = z.object({
  body: z.object({
    name: z.string({
      required_error: "username is required",
    }),
    email: z.string({
      required_error: "email is required",
    }),
  }),
});

const logInUser = z.object({
  body: z.object({
    email: z.string({
      required_error: "email is required",
    }),
    password: z.string({
      required_error: "password is required",
    }),
  }),
});

export const AuthValidationSchema = {
  CreateUser,
  logInUser,
};
