import jwt from "jsonwebtoken";

type userDataType = {
  email: string;
  password: string;
};

export const createToken = (userData: userDataType) =>
  jwt.sign({ userData }, "secret_key", { algorithm: "RS256", expiresIn: "1h" });
