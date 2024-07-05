import React from "react";

interface ButtonProps {
  className?: string;
  text: string;
  type?: "submit" | "reset" | "button";
}

const Button = ({ className, text = "Submit", type }: ButtonProps) => {
  return (
    <button
      type={type ?? "submit"}
      className={
        className ??
        "w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center"
      }
    >
      {text}
    </button>
  );
};

export default Button;
