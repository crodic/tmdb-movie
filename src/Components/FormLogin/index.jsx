import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { auth, provider } from "../../firebase/config";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
    updateAuth,
    updateToken,
    updateUser,
} from "../../Redux/SliceReducer/authSlice";

const FormLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                localStorage.setItem("token", user.accessToken);
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        userName: user.displayName,
                        avatar: user.photoURL,
                        email: user.email,
                    })
                );
                localStorage.setItem("auth", true);
                dispatch(updateAuth(true));
                dispatch(
                    updateUser({
                        userName: user.displayName,
                        avatar: user.photoURL,
                        email: user.email,
                    })
                );
                dispatch(updateToken(user.accessToken));
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
            });
    };
    return (
        <>
            <h1 className="text-center my-5 font-bold text-xl">The Movie</h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Username!",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item className="flex justify-around">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <span> | </span>
                    <a className="login-form-forgot ml-3" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item className="w-full flex justify-center items-center">
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        danger
                    >
                        Log in
                    </Button>
                </Form.Item>
            </Form>
            <button
                onClick={handleLogin}
                className="w-full bg-blue-50 py-2 rounded-md flex justify-center items-center hover:bg-blue-300 transition-all duration-500 hover:text-white"
            >
                <GoogleOutlined />
                <span className="ml-3">Đăng Nhập Với Google</span>
            </button>
        </>
    );
};
export default FormLogin;
