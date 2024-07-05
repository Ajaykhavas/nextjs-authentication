import React, { ChangeEventHandler } from "react";

interface TextBoxProps {
  className?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const TextBox = ({ className, type, name, value, placeholder, onChange }: TextBoxProps) => {
  return (
    <input
      type={type ?? "text"}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className={
        className ??
        "bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
      }
      placeholder={placeholder}
      required
    />
  );
};

export default TextBox;
