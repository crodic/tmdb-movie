import { Modal } from "antd";
import Avatar from "../Avatar";
const ModalAvatar = ({ modal, callBack, children, email }) => {
    const handleOk = () => {
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
                    <Avatar />
                </div>
            </Modal>
        </>
    );
};
export default ModalAvatar;
