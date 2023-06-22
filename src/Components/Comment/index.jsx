import { useEffect } from "react";

function Comment({ link }) {
    useEffect(() => {
        let scr = `<script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v17.0&appId=674661591342580&autoLogAppEvents=1" nonce="f37gfIZZ"></script>`;
        var scriptElement = document.createElement("script");
        scriptElement.innerHTML = scr;
        var bodyElement = document.querySelector("body");
        bodyElement.appendChild(scriptElement);
    }, []);

    return (
        <>
            <div
                class="fb-comments"
                data-href={link}
                data-width=""
                data-numposts="10"
            ></div>
        </>
    );
}

export default Comment;
