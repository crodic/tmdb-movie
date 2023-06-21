import { Cascader } from "antd";
import { useEffect, useState } from "react";
import { getGenresMovie } from "../../../api-services/filterMovie";
import { useDispatch } from "react-redux";
import { updateGenres } from "../../../Redux/SliceReducer/filterSlice";

const CascaderControl = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchGenres();
    }, []);

    const fetchGenres = async () => {
        try {
            let res = await getGenresMovie();
            if (res && res.status === 200) {
                let customize = res.data.genres.map((item) => {
                    return {
                        label: item.name,
                        value: item.id,
                    };
                });
                setData(customize);
            }
        } catch (error) {}
    };

    const onChange = (value) => {
        dispatch(updateGenres(value));
    };
    return (
        <>
            <Cascader
                style={{
                    width: "100%",
                }}
                options={data}
                onChange={onChange}
                multiple
                maxTagCount="responsive"
                defaultValue={28}
            />
        </>
    );
};
export default CascaderControl;
