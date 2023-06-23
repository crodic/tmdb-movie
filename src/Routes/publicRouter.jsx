import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import NotFound from "../pages/404";
import Detail from "../Components/Detail";
import LoginPage from "../pages/Login";

function PublicRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} index />
                <Route path="/movie" element={<MovieDetail />}>
                    <Route path="/movie/:id" element={<Detail />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default PublicRouter;
