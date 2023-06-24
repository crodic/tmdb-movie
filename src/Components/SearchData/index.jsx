import { useEffect, useRef, useState } from "react";
import { getMovieByKeyword } from "../../api-services/upComingServices";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "../../Redux/selector";
import "./style.scss";
import { capitalizeFirstLetter } from "../../utility/function";

function Search() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [totalData, setTotalData] = useState(0);
    const [totalPage, setTotalPage] = useState(1);
    const navigate = useNavigate();
    const input = useRef(null);
    const popover = useRef(null);
    const auth = useSelector(getAuth);

    const handleClick = (id) => {
        navigate(auth ? `/movie/${id}?type=movie` : "/login");
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleFocus = () => {
        setOpen(true);
    };

    const handleChangePage = () => {
        if (page <= totalPage) {
            setPage((prev) => prev + 1);
        }
    };

    useEffect(() => {
        fetchData(search, page);
    }, [search, page]);

    const fetchData = async (keyword, page) => {
        try {
            let res = await getMovieByKeyword(keyword, page);
            if (res && res.status === 200) {
                if (page !== 1 && res.data.results.length > 0) {
                    const combinedArray = [...data, ...res.data.results];
                    setData(combinedArray);
                } else {
                    setData(res.data.results);
                }
            }

            setTotalPage(res.data.total_pages);
            setTotalData(res.data.total_results);
            if (keyword.length === 0) {
                setData([]);
            }
        } catch (error) {}
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                input.current &&
                !input.current.contains(event.target) &&
                popover.current &&
                !popover.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    //

    return (
        <div className="flex justify-end items-center">
            <div
                className="search-movie hover:w-[100%] w-[50%] md:hover:w-[40%] md:w-[40%] h-[45px] border-2 rounded relative"
                ref={input}
                onClick={(e) => handleFocus(e)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute top-[5px] left-0 translate-y-1 translate-x-1"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>

                <input
                    value={search}
                    onChange={(e) => handleChange(e)}
                    type="search"
                    placeholder="Search The Movie..."
                    className="input-search w-full h-full pl-8 border-none outline-none"
                />

                {/* Popover */}
                {open && search.length > 0 && (
                    <div
                        className="tooltip absolute left-0 right-0 shadow-lg popover-item"
                        ref={popover}
                    >
                        {data && data.length > 0 ? (
                            data.map((movie, index) => {
                                return (
                                    <div
                                        className="flex items-center hover:bg-white p-3"
                                        key={index}
                                        onClick={() => handleClick(movie.id)}
                                    >
                                        <img
                                            src={`https://image.tmdb.org/t/p/original${
                                                movie.backdrop_path
                                                    ? movie.backdrop_path
                                                    : movie.poster_path
                                                    ? movie.poster_path
                                                    : "/h9DIlghaiTxbQbt1FIwKNbQvEL.jpg"
                                            }`}
                                            alt=""
                                            className="w-8 h-11 mr-1"
                                        />
                                        <div className="ml-1">
                                            <div
                                                className="line-break"
                                                title={movie.title}
                                            >
                                                {capitalizeFirstLetter(
                                                    movie.title
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="min-h-[40px] flex justify-center items-center cursor-not-allowed">
                                No Result in this key
                            </div>
                        )}
                        {data && data.length > 0 && (
                            <div
                                className={`min-h-[30px] text-center hover:text-white font-bold w-full py-2 ${
                                    page === totalPage ? "disable-button" : ""
                                }`}
                                onClick={() => handleChangePage()}
                            >
                                Xem Thêm
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;
