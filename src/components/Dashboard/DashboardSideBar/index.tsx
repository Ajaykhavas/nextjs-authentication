import LogoutButton from "../LogoutButton";

const DashboardSideBar = () => {
  return (
    <div className="h-screen w-40 bg-white p-5 flex flex-col gap-10 border-r">
      <div className="text-lg font-bold text-black">travel4Med</div>

      <div className="text-black">
        <ul>
          <li className="text-xs p-2 bg-blue-100  rounded-md cursor-pointer">Dasboard</li>
          <li className="text-xs p-2 hover:bg-blue-100 rounded-md cursor-pointer">My trips</li>
          <li className="text-xs p-2 hover:bg-blue-100 rounded-md cursor-pointer">Activities</li>
          <li className="text-xs p-2 hover:bg-blue-100 rounded-md cursor-pointer">My Groups</li>
          <li className="text-xs p-2 hover:bg-blue-100 rounded-md cursor-pointer">Comunity</li>
        </ul>
      </div>

      <LogoutButton />
    </div>
  );
};

export default DashboardSideBar;
