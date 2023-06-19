import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";

function PublicRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} index />
                <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
        </>
    );
}

export default PublicRouter;
