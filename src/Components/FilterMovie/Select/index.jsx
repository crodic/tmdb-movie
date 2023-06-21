import { Select } from "antd";
import { useDispatch } from "react-redux";
import { updateType } from "../../../Redux/SliceReducer/filterSlice";
const SelectControl = () => {
    const dispatch = useDispatch();
    const onChange = (e) => {
        dispatch(updateType(e));
    };
    return (
        <Select
            showSearch
            className="lg:w-[300px] w-full"
            placeholder="Choice Your Type..."
            optionFilterProp="children"
            filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
                {
                    value: "",
                    label: "Find All",
                },
                {
                    value: "movie",
                    label: "MOVIE",
                },
                {
                    value: "tv",
                    label: "TV SERIES",
                },
            ]}
            onChange={(e) => onChange(e)}
        />
    );
};
export default SelectControl;
