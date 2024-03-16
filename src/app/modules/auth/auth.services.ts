import { Secret } from "jsonwebtoken";
import { ILogin, ILoginResponse, IUser } from "./auth.interfaces";
import bcrypt from "bcrypt";
import config from "../../../config";
import { JwtHelpers } from "../../../shared/jwtHelpers";
import ApiError from "../../../errors/apiError";
import db from "../../db/db";

const createUser = async (payload: IUser) => {
  payload.password = await bcrypt.hash(
    payload.password,
    Number(config.bcrypt_salt_rounds)
  );

  const isExistUser = await db("users").where({ email: payload.email }).first();
  console.log({ isExistUser });
  if (isExistUser) {
    throw new ApiError(401, "the user already exist");
  }

  const result = await db("users").insert(payload);
  return result;
};

const LogIn = async (payload: ILogin): Promise<ILoginResponse> => {
  const isUserExist = await db("users").where({ email: payload.email }).first();
  console.log({ isUserExist });

  if (!isUserExist) {
    throw new ApiError(404, "user doesn't exist");
  }

  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    isUserExist.password
  );

  if (!isPasswordMatched) {
    throw new ApiError(401, "your email & password doesn't match");
  }

  const accessToken = await JwtHelpers.createToken(
    {
      userId: isUserExist?.id,
    },
    config.jwt.access_secret as Secret,
    config.jwt.access_expire as string
  );

  return {
    token: accessToken,
  };
};

export const AuthUserServices = {
  createUser,
  LogIn,
};
