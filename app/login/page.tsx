"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/shared/Logo/Logo";
import { useRouter } from "next/navigation";

const Login = (): JSX.Element => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>("");
  const [validationError, setValidationError] = useState<boolean>(false);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      router.push("/");
    }
  }, [router]);

  const submit = async () => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      });

      if (res.status === 401) {
        console.log("error", error);
        setError("Invalid email or password");
        setValidationError(true);
        return;
      }

      const data = await res.json();
      const { token } = data;

      window.localStorage.setItem("token", token);
      setError("");
      setValidationError(false);

      if (token) {
        router.push("/");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong!");
    }
  };

  return (
    <div className="h-screen flex flex-row">
      <div className="flex flex-col w-1/3 m-4 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <div className="flex items-end">
          <Logo />
          <h3 className="text-2xl leading-6 ml-0.5">Dashboard</h3>
        </div>

        <h2 className="text-3xl font-semibold text-center my-6">
          Welcome back!
        </h2>
        <div className="flex flex-col">
          <label htmlFor="" className="text-sm font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            className={`border rounded-md py-3 px-3 text-base mb-8 
            ${validationError ? "border-red-500" : ""}`}
            placeholder="Enter your username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="" className="text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="text"
            className={`border rounded-md py-3 px-3 text-base mb-6 ${
              validationError ? "border-red-500" : ""
            }`}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="h-6 mb-2 text-red-700 text-center">{error}</p>

          <button
            onClick={submit}
            className="border rounded-lg px-2.5 py-2.5 w-full my-0 mx-auto 
          bg-orange-500 text-lg font-medium text-white shadow-md"
          >
            Sign In
          </button>
        </div>

        <hr className="mt-8 mb-8" />

        <div className="border-l-4 border-green-400 bg-slate-100">
          <p className="text-sm text-center font-medium mb-1.5">
            or Login with test creedentials
          </p>
          <p className="text-sm text-center mb-1.5">Username: test_user</p>
          <p className="text-sm text-center mb-1.5">Password: Test1234</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
