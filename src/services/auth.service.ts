/* eslint-disable @typescript-eslint/no-explicit-any */
import { TOKEN_KEY } from "src/constants";
import { LoginRequest, SignUpRequest } from "src/interfaces/auth";
import { TokenData } from "src/interfaces/token";
import { User } from "src/interfaces/user";
import { setToken } from "src/utils/token";
import axios from "./axios";

function signup({
  username,
  firstName,
  lastName,
  email,
  password,
  passwordConfirmation,
}: SignUpRequest): Promise<User> {
  return axios.post<SignUpRequest, User>("/signup/", {
    username,
    firstName,
    lastName,
    email,
    password,
    passwordConfirmation,
  });
}

async function login({ username, password }: LoginRequest): Promise<User> {
  const response = await axios.post<LoginRequest, TokenData>("/token/", {
    username,
    password,
  });
  if (response.access) {
    setToken(response);
  }
  const user = await axios.get<any, User>("/token/user/", { data: {} });
  if (!user.isActive) {
    throw new Error("El usuario está inactivo");
  } else {
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
}

function logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem("user");
}

function checkCurrentUser(): Promise<User> {
  return axios.get<any, User>("/token/verify/", { data: {} });
}

const AuthService = {
  signup,
  login,
  logout,
  checkCurrentUser,
};

export default AuthService;
