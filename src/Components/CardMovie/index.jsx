import "./style.scss";
import Image from "../../images/image_not_found.jpg";
import { Link } from "react-router-dom";

const CardMovie = ({ image, title, id }) => {
    const handleOnClick = (id) => {
        console.log(id);
    };

    return (
        <>
            <div
                className="card-container max-w-[200px] min-w-[200px] relative overflow-hidden rounded"
                onClick={() => {
                    handleOnClick(id);
                }}
                title={title}
            >
                <Link to={`/movie/${id}`}>
                    <img
                        src={
                            image
                                ? `https://image.tmdb.org/t/p/original/${image}`
                                : Image
                        }
                        alt=""
                        className="max-h-[112px] min-w-full"
                    />
                    <div className="content-card min-h-[30px] bg-[#41414150] absolute z-10 left-0 right-0 bottom-[-113px] p-2">
                        <span>{title}</span>
                    </div>
                </Link>
            </div>
        </>
    );
};
export default CardMovie;
