import Image from "next/image";
import profilePicture from "../../../assets/Images/profilePicture.jpg";

const DashboardDetails = () => {
  return (
    <div className="pt-4 px-10 h-full w-full flex flex-col gap-5">
      <div className="flex-shrink-0 cursor-pointer flex justify-end items-center gap-2">
        <div className="relative w-8 h-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500">
          <Image
            className="rounded-full"
            src={profilePicture.src}
            alt="Bordered avatar"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-black text-xs font-semibold">Hi, John</div>
      </div>
      <div className="text-black text-xl">Dashboard</div>
      <div className="p-5 bg-gray-100 rounded-md text-black font-bold">
        You haven’t booked a trip yet, start exploring 🌎
      </div>
    </div>
  );
};

export default DashboardDetails;
