import DashboardDetails from "@/components/Dashboard/DasboardDetails";
import DashboardSideBar from "@/components/Dashboard/DashboardSideBar";

const Dasboard = () => {
  return (
    <div className="flex bg-white h-full w-full">
      <DashboardSideBar />
      <DashboardDetails />
    </div>
  );
};

export default Dasboard;
