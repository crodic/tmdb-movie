import { Rate } from "antd";
import { useState } from "react";
const Rating = () => {
    const [star, setStar] = useState(0);

    const onChangeStar = (e) => {
        setStar(e);
    };
    return <Rate allowHalf value={star} onChange={onChangeStar} />;
};
export default Rating;
