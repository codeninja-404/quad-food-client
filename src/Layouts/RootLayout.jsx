import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Headers/Navbar";
const RootLayout = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
