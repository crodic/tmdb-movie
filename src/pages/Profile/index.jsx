import { useSelector } from "react-redux";
import Header from "../../Components/Header";
import ProfileUser from "../../Components/ProfileUser";
import { getAuth } from "../../Redux/selector";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
    const auth = useSelector(getAuth);
    const navigate = useNavigate();
    useEffect(() => {
        auth || navigate("/login");
    }, []);
    return (
        <>
            <Header />
            <ProfileUser />
        </>
    );
}

export default ProfilePage;
