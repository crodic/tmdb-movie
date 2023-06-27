import { Modal } from "antd";
import Input from "antd/es/input/Input";
import { useState } from "react";
import { getAuth, signOut, updatePassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateAuth } from "../../Redux/SliceReducer/authSlice";
const ModalPassword = ({ modal, callBack }) => {
    const [password, setPassword] = useState("");
    const [pwd, setPwd] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SignOutAccount = async (auth) => {
        try {
            await signOut(auth);
            dispatch(updateAuth(false));
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    const handleOk = async () => {
        if (password !== pwd) {
            toast.warning("Mật khẩu không khớp");
            callBack(false);
            return;
        }
        if (password === "") {
            toast.warning("Mật Khẩu không hợp lệ");
            callBack(false);
            return;
        }
        const auth = getAuth();
        try {
            await updatePassword(auth.currentUser, password);
            toast.success(
                "Cập nhật Mật Khẩu Thành Công. Vui Lòng Đăng Nhập Lại"
            );
            setTimeout(() => {
                SignOutAccount(auth);
            }, 1000);
        } catch (error) {
            console.log(error);
            toast.error("Lỗi Cập Nhật Mật Khẩu. Vui Lòng Đăng Nhập Lại");
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
                <div className="flex flex-col justify-center items-center">
                    <Input
                        type="password"
                        value={password}
                        placeholder="Enter New Password"
                        className="mt-4"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                        type="password"
                        value={pwd}
                        placeholder="Enter New Password"
                        className="mt-4"
                        onChange={(e) => setPwd(e.target.value)}
                    />
                </div>
            </Modal>
        </>
    );
};
export default ModalPassword;
