"use client";
import Image from "next/image";
import Cookies from "universal-cookie";
import locationImage1 from "../../assets/Images/location-image1.png";
import locationImage2 from "../../assets/Images/location-image2.png";
import locationImage3 from "../../assets/Images/location-image3.png";
import locationImage4 from "../../assets/Images/location-image4.png";
import Button from "@/components/UI/Button";
import DownArrow from "@/assets/Icons/downArrow";
import CalenderIcon from "@/assets/Icons/calenderIcon";
import DashboardSideBar from "@/components/Dashboard/DashboardSideBar";
import { useEffect } from "react";
import { DUMMY_IMAGE_URL } from "@/constants/APIConstants";

const Location = () => {
  const cookies = new Cookies();

  const isLoggedIn = cookies.get("isLoggedIn");

  return (
    <div className="flex bg-white h-full w-full" suppressHydrationWarning={true}>
      {isLoggedIn && <DashboardSideBar />}
      <div className="flex max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 gap-10 py-16 w-full">
        {/* Images */}
        <div className="flex flex-col flex-1 w-3/6">
          <Image
            className="rounded-xl w-full"
            src={DUMMY_IMAGE_URL}
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <div className="flex pt-5 h-38 gap-5">
            <div className="w-full">
              <Image
                className="rounded-xl h-full w-full"
                src={DUMMY_IMAGE_URL}
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <div className="w-full">
              <Image
                className="rounded-xl h-full w-full"
                src={DUMMY_IMAGE_URL}
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <div className="w-full">
              <Image
                className="rounded-xl h-full w-full"
                src={DUMMY_IMAGE_URL}
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="w-3/6">
          <div className="text-black text-xs">Galle (City)</div>
          <div className="text-black text-3xl font-bold pt-4 pb-4">Sri Lanka</div>
          <div className="h-80 w-full border border-gray-300 rounded ">
            <div className="flex items-center gap-2 text-3xl font-semibold text-black p-6">
              €1200.0 <span className="text-sm text-gray-400">/ €2000.0</span>
              <span className="text-xs text-red-600">40% off</span>
            </div>
            <div className="px-6">
              <div className="pb-4">
                <button type="button" className="w-full rounded-md p-2 border text-sm font-medium text-black text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-300">Clinical traineeship</span>
                      <span className="flex justify-between items-center pt-1">Clinical traineeship</span>
                    </div>
                    <DownArrow />
                  </div>
                </button>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  className=" w-full rounded-md p-3 border text-sm font-medium text-black text-left"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-300">Duration</span>
                      <span className="flex justify-between items-center pt-1">2 weeks</span>
                    </div>
                    <DownArrow />
                  </div>
                </button>
                <button
                  type="button"
                  className=" w-full rounded-md p-3 border text-sm font-medium text-black text-left"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-300">Date</span>
                      <span className="flex justify-between items-center pt-1">07-05-2024</span>
                    </div>
                    <CalenderIcon />
                  </div>
                </button>
              </div>
              <div className="pt-4">
                <Button text="Book Now" />
              </div>
            </div>
          </div>
          <div className="h-30 mt-3 w-full border border-gray-300 rounded p-6">
            <div className="text-black font-semibold text-xl">Learn more about this destination</div>
            <div className="text-black font-medium text-sm pr-14 py-4">
              Photos, videos, experience reports and your personal travel plan
            </div>
            <a className="text-blue-400">Explore</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
