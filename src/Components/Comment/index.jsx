import { useEffect } from "react";

function Comment({ link }) {
    return (
        <>
            <div
                className="fb-comments"
                data-href={link}
                data-width=""
                data-numposts="10"
            ></div>
        </>
    );
}

export default Comment;
