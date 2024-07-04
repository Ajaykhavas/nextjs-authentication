import bgImage from "../../assets/Images/landing-image.jpg";

const Layout = ({ children }: any) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{ backgroundImage: `url(${bgImage.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      <div className="text-white text-center z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Site</h1>
        <p className="text-lg md:text-xl mb-8">Learn more about our services and offerings.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">Get Started</button>
      </div>

      <div className="z-50 relative">{children}</div>
    </div>
  );
};

export default Layout;
