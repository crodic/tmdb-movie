import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieByID } from "../../api-services/upComingServices";
import { Button } from "antd";
import EllipsisContent from "../EllipsisContent";
import "./style.scss";
import ModalMap from "./ModalMap";
import ModalTrailer from "../ModalTrailer";

function Detail() {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetchMovieID(id);
    }, []);

    const fetchMovieID = async (id) => {
        try {
            let res = await getMovieByID(id);
            if (res && res.status === 200) {
                setMovie(res.data);
            }
        } catch (error) {
            navigate("*");
        }
    };

    const handleClick = (id) => {
        window.open(`https://www.imdb.com/title/${id}`, "_blank");
    };

    return (
        <>
            <div className="max-w-[90%] lg:max-w-[80%] w-full border mx-auto mt-[50px] flex lg:flex-row flex-col rounded-xl shadow-2xl">
                <div className="p-5 lg:border-r-2 min-w-[30%]">
                    <div className="flex justify-center items-center ">
                        <div className="relative">
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt={movie.title}
                                title={movie.title}
                                className="h-[300px] w-[200px] rounded-md cursor-pointer"
                            />
                            <span className="lang absolute bg-blue-100 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center">
                                {movie.original_language?.toUpperCase()}
                            </span>
                        </div>
                    </div>
                    <div className="font-semibold mt-3 text-center">
                        <span>{movie.original_title}</span>
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
                <div className="p-5 min-w-[70%] max-h-[480px] overflow-x-hidden lg:overflow-y-scroll content-main">
                    <h1 className="text-2xl relative">{movie.title}</h1>
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
                                            {comp.name} - {comp.origin_country}
                                        </span>
                                        <span> | </span>
                                    </span>
                                );
                            })}
                    </div>
                    <p className="border w-full"></p>
                    <div className="my-1">
                        <span className="font-bold">Movie Duration: </span>
                        <span>{movie.runtime} minutes</span>
                    </div>
                    <p className="border w-full"></p>
                    <div className="my-1">
                        <span className="font-bold">Languages in Movie: </span>
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
                                <Button type="primary" size="large" danger>
                                    {movie.status?.toUpperCase()}
                                </Button>
                            </>
                        ) : (
                            <>
                                <ModalTrailer />
                                <Button type="primary" size="large" disabled>
                                    {movie.status?.toUpperCase()}
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;
