import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };
    return (
        <>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Button type="primary" danger onClick={() => handleClick()}>
                        Back Home
                    </Button>
                }
            />
        </>
    );
};
export default NotFound;
