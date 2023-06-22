import { Dropdown, Space, message } from "antd";
import { useEffect, useState } from "react";
import { getVideoByID } from "../../api-services/upComingServices";
import { useParams, useSearchParams } from "react-router-dom";
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
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");

    const menuProps = {
        items: cus,
        onClick: handleMenuClick,
    };

    useEffect(() => {
        fetchDataByID(id, type);
    }, []);

    const fetchDataByID = async (id, type) => {
        try {
            let res = await getVideoByID(id, type);
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
            <Space wrap className="justify-center mb-[10px] lg:mb-0">
                {menuProps.items.length > 0 && (
                    <Dropdown.Button
                        danger
                        menu={menuProps}
                        onClick={handleButtonClick}
                        overlayClassName="menu-video"
                        placement="bottom"
                    >
                        Collection Trailer
                    </Dropdown.Button>
                )}
            </Space>
        </>
    );
};
export default ModalTrailer;
