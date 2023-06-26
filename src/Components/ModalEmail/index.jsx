import { Modal } from "antd";
import Input from "antd/es/input/Input";
import { useState } from "react";
import { getAuth, signOut, updateEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateAuth } from "../../Redux/SliceReducer/authSlice";
const ModalEmail = ({ modal, callBack }) => {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SignOutAccount = async (auth) => {
        try {
            await signOut(auth);
            if (localStorage.getItem("auth")) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                localStorage.removeItem("auth");
            }
            if (sessionStorage.getItem("auth")) {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("user");
                sessionStorage.removeItem("auth");
            }
            dispatch(updateAuth(false));
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    const handleOk = async () => {
        const auth = getAuth();
        try {
            await updateEmail(auth.currentUser, email);
            toast.success("Cập nhật Email Thành Công. Vui Lòng Đăng Nhập Lại");
            setTimeout(() => {
                SignOutAccount(auth);
            }, 1000);
        } catch (error) {
            console.log(error);
            toast.error("Lỗi Cập Nhật Email. Vui Lòng Đăng Nhập Lại");
        }
        callBack(false);
    };
    const handleCancel = () => {
        console.log("Clicked cancel button");
        callBack(false);
    };
    return (
        <>
            <Modal
                title="Change Information User"
                open={modal}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ danger: true }}
            >
                <div className="flex justify-center items-center">
                    <Input
                        type="email"
                        value={email}
                        placeholder="Enter New Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </Modal>
        </>
    );
};
export default ModalEmail;
