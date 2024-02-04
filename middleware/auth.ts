import jwt from "jsonwebtoken";

export const authenticate = (req: any, res: any, next: any) => {
  try {
    const token = req.headers.cookie.split("token=")[1];

    if (!token) {
      throw new Error("User is not logged in");
    }

    const decoded = jwt.verify(token, "secret_key");
    req.user = decoded;
    next();
  } catch (err) {
    console.error(err);
    res.redirect("/login");
  }
};
