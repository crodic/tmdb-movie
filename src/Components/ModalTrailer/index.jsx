import { Dropdown, Space, message } from "antd";
import { useEffect, useState } from "react";
import { getVideoByID } from "../../api-services/upComingServices";
import { useParams } from "react-router-dom";
import { YoutubeOutlined } from "@ant-design/icons";
import "./style.scss";

const handleButtonClick = (e) => {
    message.warning("Click on LEFT MENU button.");
};
const handleMenuClick = (e) => {
    window.open(`https://www.youtube.com/watch?v=${e.key}`, "_blank");
};

const ModalTrailer = () => {
    const [cus, setCus] = useState([]);
    const { id } = useParams();

    const menuProps = {
        items: cus,
        onClick: handleMenuClick,
    };

    useEffect(() => {
        fetchDataByID(id);
    }, []);

    const fetchDataByID = async (id) => {
        try {
            let res = await getVideoByID(id);
            if (res && res.status === 200) {
                let customize = res.data.results.map((item) => {
                    return {
                        label: item.name,
                        key: item.key,
                        icon: <YoutubeOutlined />,
                    };
                });
                setCus(customize);
            }
        } catch (error) {}
    };
    return (
        <>
            <Space wrap>
                <Dropdown.Button
                    danger
                    menu={menuProps}
                    onClick={handleButtonClick}
                    overlayClassName="menu-video"
                >
                    Collection Trailer
                </Dropdown.Button>
            </Space>
        </>
    );
};
export default ModalTrailer;
