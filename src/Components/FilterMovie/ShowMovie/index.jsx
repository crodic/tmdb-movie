import { Button, Pagination } from "antd";
import CardMovie from "../../CardMovie";
import Skeletons from "../../Skeleton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilter } from "../../../Redux/SliceReducer/filterSlice";
import {
    getDataFilter,
    getDataFilters,
    getGenesFilter,
    getLoadingFilter,
    getTypeMovie,
} from "../../../Redux/selector";

function ShowMovie() {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const data = useSelector(getDataFilters);
    const dataFull = useSelector(getDataFilter);
    const loading = useSelector(getLoadingFilter);
    const genres = useSelector(getGenesFilter);
    const type = useSelector(getTypeMovie);

    const dispatch = useDispatch();

    let stringGenres = genres.join(",");

    const handleClick = () => {
        dispatch(fetchFilter({ page: 1, genres: stringGenres, type: type }));
        setPage(1);
    };

    useEffect(() => {
        let counted = sessionStorage.getItem("counted")
            ? sessionStorage.getItem("counted")
            : sessionStorage.setItem("counted", 0);
        setCount(counted);
    }, []);

    useEffect(() => {
        setTotal(dataFull.total_results);
    }, [data]);

    useEffect(() => {
        if (page > 500) {
            dispatch(
                fetchFilter({ page: 500, genres: stringGenres, type: type })
            );
            setPage(500);
        } else {
            dispatch(
                fetchFilter({ page: page, genres: stringGenres, type: type })
            );
        }
    }, [page]);

    const onChange = (paginate) => {
        if (count < 3) {
            window.open("https://www.facebook.com/bienphatxalice", "_blank");
            setCount((prev) => prev + 1);
            let countInSess = sessionStorage.getItem("counted");
            sessionStorage.setItem("counted", Number(countInSess) + 1);
        }
        window.scrollTo(0, 0);
        setPage(paginate);
    };
    return (
        <>
            <div className="mt-3">
                <Button
                    type="primary"
                    danger
                    size="large"
                    onClick={() => handleClick()}
                >
                    Filter
                </Button>
            </div>
            <div className="w-full">
                <div className="my-5 flex justify-around items-center flex-wrap gap-y-3 gap-x-1">
                    {loading ? (
                        <Skeletons />
                    ) : (
                        data &&
                        data.length > 0 &&
                        data.map((movie, index) => {
                            return (
                                <CardMovie
                                    key={index}
                                    image={movie.backdrop_path}
                                    title={
                                        movie.title
                                            ? movie.title
                                            : movie.original_name
                                    }
                                    type={movie.original_name ? "tv" : "movie"}
                                    id={movie.id}
                                />
                            );
                        })
                    )}
                </div>
                <div className="flex justify-center items-center">
                    <Pagination
                        total={total === 0 ? 1 : total}
                        onChange={onChange}
                        showSizeChanger={false}
                        showLessItems={true}
                        disabled={loading}
                        pageSize={20}
                        current={page}
                    />
                </div>
            </div>
        </>
    );
}

export default ShowMovie;
