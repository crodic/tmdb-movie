import { useSelector } from "react-redux";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PublicLayout from "../../Layout/PublicLayout";
import PrivateLayout from "../../Layout/PrivateLayout";
import { getAuth } from "../../Redux/selector";

function Home() {
    const auth = useSelector(getAuth);
    return (
        <>
            <Header />
            {auth ? <PrivateLayout /> : <PublicLayout />}
            <Footer />
        </>
    );
}

export default Home;
