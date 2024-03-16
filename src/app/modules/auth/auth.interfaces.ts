export type IUser = {
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
};

export type ILogin = {
  email: string;
  password: string;
};

export type ILoginResponse = {
  token: string;
};
