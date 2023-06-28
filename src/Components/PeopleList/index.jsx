import PeopleCard from "../PeopleCard";

function PeopleList({ list }) {
    return (
        <>
            <div className="flex lg:justify-between justify-center flex-wrap max-w-[90%] mx-auto">
                {list &&
                    list.length > 0 &&
                    list.map((author, index) => {
                        return (
                            <PeopleCard
                                key={author.id}
                                url={author.profile_path}
                                name={author.name}
                            />
                        );
                    })}
            </div>
        </>
    );
}

export default PeopleList;
