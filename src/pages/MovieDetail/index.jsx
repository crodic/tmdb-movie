import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import FilterMovie from "../../Components/FilterMovie";

function MovieDetail() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <Outlet />
            <FilterMovie />
            <Footer />
        </>
    );
}

export default MovieDetail;
