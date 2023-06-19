import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { getMovieByID } from "../../api-services/upComingServices";
import { useParams } from "react-router-dom";

function MovieDetail() {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetchMovieID(id);
    }, []);

    const fetchMovieID = async (id) => {
        try {
            let res = await getMovieByID(id);
            if (res && res.status === 200) {
                setMovie(res.data);
            }
        } catch (error) {}
    };

    return (
        <>
            <Header />
        </>
    );
}

export default MovieDetail;
