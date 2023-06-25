import { useEffect, useState } from "react";
import {
    Link,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";
import {
    getCastByMovie,
    getMovieByID,
} from "../../api-services/upComingServices";
import { Button } from "antd";
import EllipsisContent from "../EllipsisContent";
import ModalMap from "./ModalMap";
import ModalTrailer from "../ModalTrailer";
import Skeletons from "../Skeleton";
import "./style.scss";
import Rating from "../Rating";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

function Detail() {
    const [movie, setMovie] = useState({});
    const [cast, setCast] = useState([]);
    const [like, setLike] = useState(false);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");
    useEffect(() => {
        fetchMovieID(id, type);
        fetchCastMovie(id, type);
    }, [id, type]);

    const fetchMovieID = async (id, type) => {
        try {
            setLoading(true);
            let res = await getMovieByID(id, type);
            if (res && res.status === 200) {
                setLoading(false);
                setMovie(res.data);
            }
        } catch (error) {
            setLoading(false);
            navigate("*");
        }
    };

    const fetchCastMovie = async (id, type) => {
        try {
            let res = await getCastByMovie(id, type);
            if (res && res.status === 200) {
                let data = res.data.cast.slice(0, 3);
                setCast(data);
            }
        } catch (error) {}
    };

    const handleClick = (id) => {
        window.open(`https://www.imdb.com/title/${id}`, "_blank");
    };

    return (
        <>
            <div className="max-w-[90%] lg:max-w-[80%] w-full border mx-auto mt-[50px] flex lg:flex-row flex-col rounded-xl shadow-2xl">
                {loading ? (
                    <Skeletons />
                ) : (
                    <>
                        <div className="p-5 lg:border-r-2 min-w-[30%]">
                            <div className="flex justify-center items-center ">
                                <div className="relative">
                                    <img
                                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                        alt={
                                            movie.title
                                                ? movie.title
                                                : movie.original_name
                                        }
                                        title={
                                            movie.title
                                                ? movie.title
                                                : movie.original_name
                                        }
                                        onClick={() => {
                                            handleClick(movie.imdb_id);
                                        }}
                                        className="h-[300px] w-[200px] rounded-md cursor-pointer"
                                    />
                                    <span className="lang absolute bg-blue-100 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center">
                                        {movie.original_language?.toUpperCase()}
                                    </span>
                                </div>
                            </div>
                            <div className="font-semibold mt-3 text-center">
                                <span
                                    onClick={() => {
                                        handleClick(movie.imdb_id);
                                    }}
                                    className="cursor-pointer hover:text-blue-400"
                                >
                                    {movie.original_title
                                        ? movie.original_title
                                        : movie.original_name}
                                </span>
                            </div>
                            <div className="flex justify-center mt-5">
                                <Button
                                    size="large"
                                    danger
                                    type="primary"
                                    onClick={() => {
                                        handleClick(movie.imdb_id);
                                    }}
                                >
                                    Go Page
                                </Button>
                            </div>
                            <p className="border w-full block lg:hidden mt-3"></p>
                        </div>
                        <div className="p-5 min-w-[70%] lg:max-h-[480px] overflow-hidden lg:overflow-y-scroll content-main">
                            <h1 className="text-2xl relative flex justify-between items-center">
                                <div className="flex justify-between items-center">
                                    {like ? (
                                        <HeartFilled
                                            title="unlike"
                                            className="mr-2 text-red-600 cursor-pointer"
                                            onClick={() => setLike(!like)}
                                        />
                                    ) : (
                                        <HeartOutlined
                                            title="like"
                                            className="mr-2 text-red-600 cursor-pointer"
                                            onClick={() => setLike(!like)}
                                        />
                                    )}

                                    {movie.title
                                        ? movie.title
                                        : movie.original_name}
                                </div>
                                <Rating />
                            </h1>

                            {/* Main Content */}
                            <p className="border w-full"></p>
                            <div className="my-1">
                                <p className="font-bold">Overview: </p>
                                <EllipsisContent contents={movie.overview} />
                            </div>
                            <p className="border w-full"></p>
                            <div className="my-1">
                                <span className="font-bold">Genres: </span>
                                <ModalMap data={movie.genres} />
                            </div>
                            <p className="border w-full"></p>
                            <div className="my-1">
                                <span className="font-bold">Popularity: </span>
                                <span>{movie.popularity}</span>
                            </div>
                            <p className="border w-full"></p>
                            <div className="my-1">
                                <span className="font-bold">Popularity: </span>
                                {movie &&
                                    movie.production_companies &&
                                    movie.production_companies.map((comp) => {
                                        return (
                                            <span key={comp.id}>
                                                <span
                                                    datatype={comp.id}
                                                    className="text-blue-400 hover:text-blue-900 cursor-pointer"
                                                >
                                                    {comp.name} -{" "}
                                                    {comp.origin_country}
                                                </span>
                                                <span> | </span>
                                            </span>
                                        );
                                    })}
                            </div>
                            <p className="border w-full"></p>
                            <div className="my-1 flex justify-between">
                                <div>
                                    <span className="font-bold">Casts: </span>
                                    {cast &&
                                        cast.length > 0 &&
                                        cast.map((item) => {
                                            return (
                                                <span key={item.id}>
                                                    <Link
                                                        to={`/cast/${item.id}`}
                                                        className="text-blue-400 hover:text-blue-900 cursor-pointer"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                    <span> | </span>
                                                </span>
                                            );
                                        })}
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 cursor-pointer text-blue-300 hover:text-blue-600"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <p className="border w-full"></p>
                            <div className="my-1">
                                <span className="font-bold">
                                    Movie Duration:{" "}
                                </span>
                                <span>
                                    {movie.runtime
                                        ? movie.runtime + " minutes"
                                        : "Unknown"}{" "}
                                </span>
                            </div>
                            <p className="border w-full"></p>
                            <div className="my-1">
                                <span className="font-bold">
                                    Languages in Movie:{" "}
                                </span>
                                <ModalMap data={movie.spoken_languages} />
                            </div>
                            <p className="border w-full"></p>
                            <div className="my-1">
                                <span className="font-bold">Reviews: </span>
                                <span>{movie.vote_average} </span>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between my-3">
                                {movie.status && movie.status === "Released" ? (
                                    <>
                                        <ModalTrailer />
                                        <Button
                                            type="primary"
                                            size="large"
                                            danger
                                        >
                                            {movie.status?.toUpperCase()}
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <ModalTrailer />
                                        <Button
                                            type="primary"
                                            size="large"
                                            disabled
                                        >
                                            {movie.status?.toUpperCase()}
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Detail;
