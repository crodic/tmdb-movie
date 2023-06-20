function ModalMap({ data }) {
    return (
        <>
            {data &&
                data.map((slice, index) => {
                    return (
                        <span key={slice.id ? slice.id : index}>
                            <a className="text-blue-400 hover:text-blue-900 cursor-pointer">
                                {slice.english_name
                                    ? slice.english_name
                                    : slice.name}
                            </a>
                            <span> | </span>
                        </span>
                    );
                })}
        </>
    );
}

export default ModalMap;
