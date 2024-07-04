"use client";
import Login from "@/components/Auth/Login";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { RootState } from "@/store/store";
import { setIsShowLoginPopup } from "@/store/user-auth-modal-slice";
import { FormEvent, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const [modalType, setModalType] = useState("login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { isShowLoginPopup } = useSelector((state: RootState) => state.userAuth);
  console.log(modalType, "modalType");

  const closeModal = () => {
    dispatch(setIsShowLoginPopup(false)); // Assuming this is your action type and payload
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateAccount = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    // Access formData here and perform your logic
    console.log(formData, "formDataformData"); // Example: log formData to console

    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.name,
        email: formData.email,
        password: formData.password,
        /* other user data */
      }),
    })
      .then((res) => res.json())
      .then(console.log);

    // Reset form after submission (if needed)
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Layout>
        <Header />
        {isShowLoginPopup && (
          <div
            id="authentication-modal"
            aria-hidden="true"
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-800 bg-opacity-50"
          >
            <div className="relative  rounded-lg shadow-lg max-w-md w-full">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow ">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 md:p-5">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray">
                    {modalType === "createAccount" ? "Create account" : "Login"}
                  </h3>

                  <div>
                    <a
                      className="text-xs cursor-pointer pr-4 text-blue-500"
                      onClick={() => setModalType(modalType === "login" ? "createAccount" : "login")}
                    >
                      {modalType === "login" ? "Create account" : "Login"}
                    </a>
                    <button
                      type="button"
                      className="end-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                      data-modal-hide="authentication-modal"
                      onClick={closeModal}
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                </div>
                {/* <!-- Modal body --> */}
                <div className="px-4 pb-5 md:px-5">
                  {modalType !== "createAccount" ? (
                    <Login />
                  ) : (
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
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Home;
