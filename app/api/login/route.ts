"use server";

import create from "@/app/actions";
import { verifyUserCredentials } from "@/utils/verifyUserCredentials";
import jwt from "jsonwebtoken";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  try {
    console.log(req.body);
    const body = await req.json();
    const { email, password } = body;

    // Validate the login credentials
    const user = verifyUserCredentials({
      email,
      password,
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Create JWT token
    const token = jwt.sign({ user: "1" }, "secret_key", {
      expiresIn: "1h",
    });

    // Set headers "Set-Cookie"; token; HttpOnly; Secure
    await create(token);

    return NextResponse.json({ message: "Logged in", token }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "An error occured, please try again later" },
      { status: 500 }
    );
  }
}
