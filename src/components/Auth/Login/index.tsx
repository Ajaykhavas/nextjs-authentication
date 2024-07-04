import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import { setIsLoggedIn, setIsShowLoginPopup } from "@/store/user-auth-modal-slice";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.userName,
        password: formData.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "datadata");
        const cookies = new Cookies();
        if (data.token) {
          cookies.set("userToken", data.token, {
            path: "/",
          });
          cookies.set("isLoggedIn", true, { path: "/" });

          dispatch(setIsLoggedIn(true));
          dispatch(setIsShowLoginPopup(false));
          toast.success("Logged in successfully!");
          router.push("/dashboard");
        } else {
          toast.error(data.message);
        }
      });

    setFormData({
      userName: "",
      password: "",
    });
  };

  return (
    <div>
      <form className="space-y-4" onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            name="userName"
            id="userName"
            value={formData.userName}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
            placeholder="Enter user name"
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
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label className="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300">Remember me</label>
          </div>
          <a href="#" className="text-xs text-blue-700 hover:underline dark:text-blue-500">
            forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center"
        >
          Continue
        </button>
        <div className="text-xs font-medium text-center text-gray-500">or login with</div>
      </form>

      <button
        type="submit"
        className=" w-full mt-5 text-black bg-gray-100 focus:ring-4 rounded-lg text-xs px-5 py-2.5 text-center"
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div>
              <span className="[&>svg]:h-4 [&>svg]:w-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </div>
            <div>Continue with Facebook</div>
          </div>

          <div>
            <svg
              className="w-2 h-2 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </div>
        </div>
      </button>

      <button
        type="submit"
        className=" w-full mt-5 text-black bg-gray-100 focus:ring-4 rounded-lg text-xs px-5 py-2.5 text-center"
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div>
              <span className="[&>svg]:h-4 [&>svg]:w-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 488 512">
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </span>
            </div>
            <div>Continue with Google</div>
          </div>

          <div>
            <svg
              className="w-2 h-2 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </div>
        </div>
      </button>

      <button
        type="submit"
        className=" w-full mt-5 text-black bg-gray-100 focus:ring-4 rounded-lg text-xs px-5 py-2.5 text-center"
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div>
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                  <path
                    fill="black"
                    d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52a4.17 4.17 0 0 0-1 3.09a3.69 3.69 0 0 0 2.94-1.42m2.52 7.44a4.51 4.51 0 0 1 2.16-3.81a4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.8 1.21 1.8 2.58 3.12 2.53s1.75-.82 3.28-.82s2 .82 3.3.79s2.22-1.24 3.06-2.45a11 11 0 0 0 1.38-2.85a4.41 4.41 0 0 1-2.68-4.04"
                  />
                </svg>
              </span>
            </div>
            <div>Continue with Apple</div>
          </div>

          <div>
            <svg
              className="w-2 h-2 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Login;
