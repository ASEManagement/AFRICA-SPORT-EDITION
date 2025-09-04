import React from "react";
import SocialButton from "./SocialButton";
import AppleIcon from "./icons/AppleIcon";
import FacebookIcon from "./icons/FacebookIcon";
import GoogleIcon from "./icons/GoogleIcon";

export default function AuthPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">
          Welcome to AfricaSport
        </h1>
        <div className="flex flex-col gap-4">
          <SocialButton
            text="Continue with Google"
            icon={<GoogleIcon />}
            bg="bg-red-500 hover:bg-red-600"
          />
          <SocialButton
            text="Continue with Facebook"
            icon={<FacebookIcon />}
            bg="bg-blue-600 hover:bg-blue-700"
          />
          <SocialButton
            text="Continue with Apple"
            icon={<AppleIcon />}
            bg="bg-black hover:bg-gray-800"
          />
        </div>
      </div>
    </div>
  );
}
