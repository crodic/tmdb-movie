import { Button, Form, Input } from "antd";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not a valid email!",
    },
};

const FormSignIn = () => {
    const navigate = useNavigate();

    const updateUserProfile = async (currentUser, object) => {
        try {
            await updateProfile(currentUser, object);
        } catch (error) {
            toast.error(error);
        }
    };

    const createUserWithEmail = async (auth, email, password, name) => {
        try {
            let userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            let user = userCredential.user;
            if (user) {
                updateUserProfile(auth.currentUser, {
                    displayName: name,
                });
                navigate("/login");
            }
        } catch (error) {
            navigate("*");
        }
    };

    const onFinish = (values) => {
        if (values.user.password !== values.user.confirm_password) {
            toast.warning(`The Confirm password is not match.`);
            return;
        }
        if (values.user.password.length < 5) {
            toast.warning(
                `The password is not safe. Please Re-Enter Password.`
            );
            return;
        }

        createUserWithEmail(
            auth,
            values.user.email,
            values.user.password,
            values.user.name
        );
    };

    return (
        <>
            <h1 className="text-center my-5 font-bold text-xl">The Movie</h1>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                }}
                validateMessages={validateMessages}
            >
                <Form.Item
                    name={["user", "name"]}
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={["user", "email"]}
                    label="Email"
                    rules={[
                        {
                            type: "email",
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name={["user", "password"]}
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name={["user", "confirm_password"]}
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        ...layout.wrapperCol,
                        offset: 8,
                    }}
                    className="lg:flex lg:justify-center"
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        danger
                        size="large"
                    >
                        Sign In
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
export default FormSignIn;
