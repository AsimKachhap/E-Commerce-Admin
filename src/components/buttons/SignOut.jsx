"use client";

import React from "react";
import { signIn, signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-2 bg-white rounded-md text-teal-500 hover:bg-teal-700 hover:text-white"
    >
      Log Out
    </button>
  );
};

export default SignOut;
