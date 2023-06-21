import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateValue } from "../../Redux/SliceReducer/searchSlice";
import { getValueSearch } from "../../Redux/selector";
import { getMovieByKeyword } from "../../api-services/upComingServices";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function Search() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalData, setTotalData] = useState(0);
    const [totalPage, setTotalPage] = useState(1);
    const search = useSelector(getValueSearch);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const input = useRef(null);
    const popover = useRef(null);

    const handleClick = (id) => {
        navigate(`/movie/${id}`);
    };

    useEffect(() => {
        fetchSearchMovie(search, page);
    }, [search, page]);

    const fetchSearchMovie = async (keyword, page) => {
        try {
            if (keyword.length > 0 && keyword !== "") {
                let res = await getMovieByKeyword(keyword, page);
                if (res && res.status === 200) {
                    if (res.data.results.length > 0) {
                        const combinedArray = [...data, ...res.data.results];
                        setData(combinedArray);
                    } else {
                        setData(res.data.results);
                    }
                    setTotalPage(res.data.total_pages);
                    setTotalData(res.data.total_results);
                }
            }
            if (keyword.length === 0) {
                setData([]);
            }
        } catch (error) {}
    };

    const handleChange = (e) => {
        dispatch(updateValue(e.target.value));
    };

    const handleFocus = () => {
        setOpen(true);
    };

    const handleChangePage = () => {
        if (page <= totalPage) {
            setPage((prev) => prev + 1);
        }
    };

    function capitalizeFirstLetter(str) {
        const words = str.split(" ");

        const capitalizedWords = words.map((word) => {
            if (word.length > 0) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
            return word;
        });
        const capitalizedStr = capitalizedWords.join(" ");
        return capitalizedStr;
    }

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

    return (
        <div className="flex justify-end items-center">
            <div
                className="search-movie hover:w-[100%] w-[50%] md:hover:w-[40%] md:w-[40%] h-[35px] border-2 rounded relative"
                ref={input}
                onClick={(e) => handleFocus(e)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute top-0 left-0 translate-y-1 translate-x-1"
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
                {open && search.length > 0 && (
                    <div
                        className="tooltip absolute left-0 right-0 shadow-lg popover-item"
                        ref={popover}
                    >
                        {data && data.length > 0 ? (
                            data.map((movie, index) => {
                                return (
                                    <div
                                        className="flex items-center hover:bg-white p-2"
                                        key={index}
                                        onClick={() => handleClick(movie.id)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                                            />
                                        </svg>

                                        <div className="ml-1">
                                            <div
                                                className="line-break"
                                                title={movie.name}
                                            >
                                                {capitalizeFirstLetter(
                                                    movie.name
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
                                className={`min-h-[30px] text-center hover:text-white font-bold w-full ${
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
