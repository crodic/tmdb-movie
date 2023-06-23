import FormLogin from "../../Components/FormLogin";
import Header from "../../Components/Header";

function LoginPage() {
    return (
        <>
            <Header />
            <div className="w-full min-h-screen flex justify-center items-center">
                <div className="w-[20em] lg:max-w-[400px] max-w-[90%] border p-4 shadow-lg">
                    <FormLogin />
                </div>
            </div>
        </>
    );
}

export default LoginPage;
