"use client";
import React from "react";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div>
      <button
        onClick={() => signIn("google")}
        className="px-4 py-2 bg-white rounded-md text-teal-500 hover:bg-teal-700 hover:text-white"
      >
        Log In
      </button>
    </div>
  );
};

export default SignIn;
