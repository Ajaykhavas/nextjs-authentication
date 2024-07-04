"use client";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";

const LogoutButton = () => {
  const cookies = new Cookies();
  const router = useRouter();

  const handleLogout = () => {
    cookies.remove("isLoggedIn");
    cookies.remove("userToken");
    toast.success("Logged out successfully!");
    router.push("/");
  };

  return (
    <button
      className="text-black text-xs mt-auto bg-blue-200 hover:bg-blue-400 hover:text-white rounded-md p-2"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
