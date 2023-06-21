import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

function MovieDetail() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default MovieDetail;
