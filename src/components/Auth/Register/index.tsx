"use client";
import Button from "@/components/UI/Button";
import TextBox from "@/components/UI/TextBox";
import React, { FormEvent, useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateAccount = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form className="space-y-4" onSubmit={handleCreateAccount}>
        <div>
          <TextBox
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter user name"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <TextBox
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter user email"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <TextBox
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleInputChange}
          />
        </div>
        <Button text="Sign in" />
      </form>
    </div>
  );
};

export default Register;
