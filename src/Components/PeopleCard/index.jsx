import Image from "../../images/image_not_found.jpg";

function PeopleCard({ url, name }) {
    return (
        <>
            <div className="w-[200px] h-[250px] border-[3px] flex flex-col my-2 shadow-lg">
                <img
                    src={
                        url
                            ? `https://image.tmdb.org/t/p/original${url}`
                            : Image
                    }
                    alt=""
                    className="object-cover w-full min-h-[200px] max-h-[200px] cursor-pointer"
                />
                <div className="min-h-[50px] text-blue-300 hover:text-blue-600">
                    <p className="line-clamp-1 h-full flex justify-center items-center cursor-pointer">
                        {name}
                    </p>
                </div>
            </div>
        </>
    );
}

export default PeopleCard;
