import { ReactNode } from "react";
import bgImage from "../../assets/Images/landing-image.jpg";
import Header from "../Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
