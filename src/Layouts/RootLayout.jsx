import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Headers/Banner";
import NavBar from "../Components/Headers/Navbar";
import Populer from "../Components/Populer/Populer";


const RootLayout = () => {
    return (
       <>
       <NavBar></NavBar>
       <Banner></Banner>
       <Populer></Populer>
       <Footer></Footer>
       </>
    );
};

export default RootLayout;