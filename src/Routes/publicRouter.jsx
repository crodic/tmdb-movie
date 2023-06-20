import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import NotFound from "../pages/404";

function PublicRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} index />
                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default PublicRouter;
