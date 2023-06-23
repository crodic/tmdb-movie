import "./style.scss";
import Image from "../../images/image_not_found.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "../../Redux/selector";

const CardMovie = ({ image, title, id, type }) => {
    const auth = useSelector(getAuth);
    const handleOnClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <div
                className="card-container shadow-lg hover:shadow-xl w-[45%] md:w-[30%] lg:w-[30%] relative overflow-hidden rounded"
                onClick={() => {
                    handleOnClick();
                }}
                title={title}
            >
                <Link to={auth ? `/movie/${id}?type=${type}` : "/login"}>
                    <img
                        src={
                            image
                                ? `https://image.tmdb.org/t/p/original/${image}`
                                : Image
                        }
                        alt=""
                        className="w-full lg:min-h-[160px] min-h-[102px] max-h-[102px] lg:h-[160px]"
                    />
                    <div className="content-card min-h-[30px] bg-[#41414150] absolute z-10 left-0 right-0 bottom-[-113px] p-2 text-[12px] lg:text-base">
                        <span>{title}</span>
                    </div>
                </Link>
            </div>
        </>
    );
};
export default CardMovie;
