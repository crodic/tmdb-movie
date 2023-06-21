import CascaderControl from "./Cascader";
import SelectControl from "./Select";
import ShowMovie from "./ShowMovie";

function FilterMovie() {
    return (
        <>
            <div className="my-[50px] max-w-[90%] mx-auto border p-5">
                <h1 className="text-2xl font-bold text-center mb-5">
                    Filter The Movie
                </h1>
                <div className="filter-control block lg:flex justify-between items-center">
                    <div className="lg:w-[40%] w-full">
                        <p>Genres: </p>
                        <CascaderControl />
                    </div>
                    <div className="lg:w-[50%] w-full">
                        <p>Type: </p>
                        <SelectControl />
                    </div>
                </div>
                <div className="view-movie">
                    <ShowMovie />
                </div>
            </div>
        </>
    );
}

export default FilterMovie;
