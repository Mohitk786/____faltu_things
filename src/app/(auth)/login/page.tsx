"use client";

import { Facebook } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/dashboard", 
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>

        {/* Google Login */}
        <button
          onClick={() =>
            signIn("google", { callbackUrl: "/dashboard" })
          }
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 mb-4 hover:bg-gray-100 transition"
        >
          <Facebook className="text-xl" />
          <span>Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2 mb-4">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400 text-sm">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Credentials Login */}
        <form onSubmit={handleCredentialsSignIn} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700 transition"
          >
            Sign in with Email
          </button>
        </form>
      </div>
    </div>
  );
}
