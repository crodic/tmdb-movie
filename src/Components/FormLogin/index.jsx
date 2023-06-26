import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { auth, provider } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import {
    updateAuth,
    updateToken,
    updateUser,
} from "../../Redux/SliceReducer/authSlice";
import AvatarDefault from "../../images/avatar-default.png";
import { getAuth } from "../../Redux/selector";
import { useEffect } from "react";
import { toast } from "react-toastify";

const FormLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogin = useSelector(getAuth);

    useEffect(() => {
        isLogin && navigate("/");
    }, []);

    const saveInfo = (info, state, type) => {
        const obj = {
            userName: info.displayName ? info.displayName : "New User",
            avatar: info.photoURL ? info.photoURL : AvatarDefault,
            email: info.email,
            service: type,
        };
        state.setItem("token", info.accessToken);
        state.setItem("user", JSON.stringify(obj));
        state.setItem("auth", true);
        dispatch(updateAuth(true));
        dispatch(updateUser(obj));
        dispatch(updateToken(info.accessToken));
    };

    const signInEmail = async (auth, email, password, remember) => {
        try {
            let userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;
            if (remember) {
                saveInfo(user, localStorage, "email");
            } else {
                saveInfo(user, sessionStorage, "email");
            }
            toast.success("Đăng Nhập Thành Công");
            navigate("/");
        } catch (error) {
            toast.error("Tài Khoản Hoặc Mật Khẩu Không Chính Xác");
            const errorCode = error.code;
            const errorMessage = error.message;
        }
    };

    const signInGoogle = async (auth, provider) => {
        try {
            let result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            saveInfo(user, localStorage, "google");
            navigate("/");
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const credential = GoogleAuthProvider.credentialFromError(error);
        }
    };

    const onFinish = (values) => {
        signInEmail(auth, values.username, values.password, values.remember);
    };

    const handleLoginGoogle = () => {
        signInGoogle(auth, provider);
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
                    <Form.Item name="remember" noStyle>
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
                onClick={handleLoginGoogle}
                className="w-full bg-blue-50 py-2 rounded-md flex justify-center items-center hover:bg-blue-300 transition-all duration-500 hover:text-white"
            >
                <GoogleOutlined />
                <span className="ml-3">Đăng Nhập Với Google</span>
            </button>
        </>
    );
};
export default FormLogin;
