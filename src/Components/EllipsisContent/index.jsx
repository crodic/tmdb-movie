import { Typography } from "antd";
import { useState } from "react";
const { Paragraph, Text } = Typography;
const EllipsisContent = ({ contents }) => {
    const [ellipsis, setEllipsis] = useState(true);
    return (
        <>
            <Paragraph ellipsis={ellipsis ? { rows: 2 } : false}>
                {contents}
            </Paragraph>
            <span
                className="text-[12px] cursor-pointer text-blue-400 hover:text-blue-600"
                onClick={() => setEllipsis(!ellipsis)}
            >
                {ellipsis ? "Xem Thêm" : "Thu Gọn"}
            </span>
        </>
    );
};
export default EllipsisContent;
