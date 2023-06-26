import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
const props = {
    name: "file",
    onChange(info) {
        if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
const Avatar = () => (
    <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
);
export default Avatar;
