"use server";

import { cookies } from "next/headers";

async function create(token: string) {
  cookies().set({
    name: "token",
    value: token,
    httpOnly: true,
    path: "/api/login",
  });
}

export default create;
