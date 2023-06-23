import FormSignIn from "../../Components/FormSignIn";
import Header from "../../Components/Header";

function SignInPage() {
    return (
        <>
            <Header />
            <div className="w-full min-h-screen flex justify-center items-center">
                <div className="w-[35em] lg:max-w-[500px] max-w-[90%] border p-4 shadow-lg">
                    <FormSignIn />
                </div>
            </div>
        </>
    );
}

export default SignInPage;
