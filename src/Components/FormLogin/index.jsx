import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { auth, provider } from "../../firebase/config";
import { useDispatch } from "react-redux";
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

const FormLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const saveInfo = (info, state) => {
        const obj = {
            userName: info.displayName ? info.displayName : "New User",
            avatar: info.photoURL ? info.photoURL : AvatarDefault,
            email: info.email,
        };
        state.setItem("token", info.accessToken);
        state.setItem("user", JSON.stringify(obj));
        state.setItem("auth", true);
        dispatch(updateAuth(true));
        dispatch(updateUser(obj));
        dispatch(updateToken(info.accessToken));
    };

    const onFinish = (values) => {
        signInWithEmailAndPassword(auth, values.username, values.password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (values.remember) {
                    saveInfo(user, localStorage);
                } else {
                    saveInfo(user, sessionStorage);
                }
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    const handleLoginGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                saveInfo(user, localStorage);
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
