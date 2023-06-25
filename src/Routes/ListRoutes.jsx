import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import NotFound from "../pages/404";
import Detail from "../Components/Detail";
import LoginPage from "../pages/Login";
import SignInPage from "../pages/SignIn";
import ProfilePage from "../pages/Profile";

function ListRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} index />
                <Route path="/movie" element={<MovieDetail />}>
                    <Route path="/movie/:id" element={<Detail />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/user" element={<ProfilePage />}></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default ListRoutes;
