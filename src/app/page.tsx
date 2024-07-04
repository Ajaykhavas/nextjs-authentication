"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { RootState } from "@/store/store";
import { setIsShowLoginPopup } from "@/store/user-auth-modal-slice";

const Home = () => {
  const dispatch = useDispatch();

  const [modalType, setModalType] = useState("login");

  const { isShowLoginPopup } = useSelector((state: RootState) => state.userAuth);

  const closeModal = () => {
    dispatch(setIsShowLoginPopup(false));
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
              <div className="relative bg-white rounded-lg shadow ">
                <div className="flex items-center justify-between p-4 md:p-5">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray">
                    {modalType === "createAccount" ? "Create account" : "Login"}
                  </h3>
                  <div>
                    <div
                      className="text-xs cursor-pointer pr-4 text-blue-500"
                      onClick={() => setModalType(modalType === "login" ? "createAccount" : "login")}
                    >
                      {modalType === "login" ? "Create account" : "Login"}
                    </div>
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
                <div className="px-4 pb-5 md:px-5">{modalType !== "createAccount" ? <Login /> : <Register />}</div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Home;
