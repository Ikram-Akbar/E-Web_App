import { Outlet } from "react-router-dom";
import Footer from "../SharedComponents/Footer/Footer";
import Header from "../SharedComponents/Header/Header";
import { ToastContainer } from "react-toastify";


const Root = () => {
    return (
        <div>
            <Header  />
            <Outlet />
            <Footer />
            <ToastContainer/>
        </div>
    );
};

export default Root;