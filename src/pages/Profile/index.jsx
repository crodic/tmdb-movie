import { useSelector } from "react-redux";
import Header from "../../Components/Header";
import ProfileUser from "../../Components/ProfileUser";
import { getAuth } from "../../Redux/selector";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProfilePage() {
    const auth = useSelector(getAuth);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(auth);
        if (!auth) {
            navigate("/login");
        }
    }, []);

    return (
        <>
            <Header />
            <ProfileUser />
        </>
    );
}

export default ProfilePage;
