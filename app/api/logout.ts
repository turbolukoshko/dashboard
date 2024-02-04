const logout = (req: any, res: any) => {
  res.setHeader(
    "Set-Cookie",
    "token= ; expires = Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  );
  res.status(200).json({ message: "Logged out" });
};

export default logout;
