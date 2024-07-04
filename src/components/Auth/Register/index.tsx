"use client";
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
          <input
            type="name"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
            placeholder="Enter name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
            placeholder="Enter email"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Register;
