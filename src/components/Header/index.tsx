"use client";
import { useDispatch } from "react-redux";
import { setIsShowLoginPopup } from "@/store/user-auth-modal-slice";
import profilePicture from "../../assets/Images/profilePicture.jpg";
import { Fragment } from "react";
import Image from "next/image";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleProfileIconClick = () => {
    const cookies = new Cookies();

    const isLoggedIn = cookies.get("isLoggedIn");
    if (isLoggedIn) {
      router.push("/dashboard");
    } else {
      dispatch(setIsShowLoginPopup(true));
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 text-white">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-lg font-bold">travel4Med</div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-5">
              <a href="#" className="hover:text-gray-300">
                Locations
              </a>
              <a href="#" className="hover:text-gray-300">
                Travel
              </a>
              <a href="#" className="hover:text-gray-300">
                Webinar
              </a>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </nav>

            {/* Profile Icon */}

            <div className="flex-shrink-0 cursor-pointer" onClick={handleProfileIconClick}>
              <div className="relative w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500">
                <Image
                  className="rounded-full"
                  src={profilePicture.src}
                  alt="Bordered avatar"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
