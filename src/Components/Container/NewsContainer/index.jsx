import { useEffect, useState } from "react";
import PeopleList from "../../PeopleList";
import { getPeople } from "../../../api-services/peopleServices";
import { Pagination } from "antd";
import Skeletons from "../../Skeleton";

function NewsContainer() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPeople(page);
    }, [page]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    const fetchPeople = async (page) => {
        try {
            setLoading(true);
            let res = await getPeople(page);
            setLoading(false);
            if (res && res.status === 200) {
                setData(res.data.results);
                setTotal(res.data.total_results);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setPage(e);
    };

    return (
        <>
            <h1 className="text-2xl text-center my-5">People In The Movie</h1>
            {loading ? <Skeletons /> : <PeopleList list={data} />}

            <div className="lg:max-w-[90%] max-w-[100%] mx-auto flex justify-center items-center my-3">
                <Pagination
                    defaultCurrent={1}
                    showSizeChanger={false}
                    pageSize={data?.length > 0 ? data.length : 20}
                    total={total}
                    size="default"
                    onChange={handleChange}
                />
            </div>
        </>
    );
}

export default NewsContainer;
