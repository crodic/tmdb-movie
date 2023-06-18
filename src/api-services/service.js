import axios from "../axios";

export const ServiceAPI = async (page) => {
    try {
        let data = await axios.get(`/${page}`, {}); // Tham số thứ 2 là 1 object chứa params,...
        return data.data
    } catch (error) {
        return error
    }
}