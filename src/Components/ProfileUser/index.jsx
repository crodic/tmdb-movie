import { Button } from "antd";
import "./style.scss";

function ProfileUser() {
    return (
        <>
            <div className="profile-content max-w-[90%] w-full border mx-auto my-[50px] flex lg:flex-row flex-col rounded-xl shadow-2xl">
                <div className="p-5 lg:border-r-2 min-w-[30%] flex flex-col justify-center">
                    <div className="flex justify-center ">
                        <div className="avatar-wrapper relative overflow-hidden w-[120px] h-[120px] border rounded-[50%] cursor-pointer flex justify-center items-center bg-black">
                            <img
                                src="/src/images/avatar-default.png"
                                alt=""
                                className="avatar-user w-[110px] h-[110px]"
                            />
                            <div className="change-avatar absolute bottom-0 right-0 left-0 top-0 hidden justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-red-400 font-bold"
                                >
                                    <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-5">
                        <h1 className="text-lg text-blue-600 font-extrabold">
                            Crodic Crystal
                        </h1>
                    </div>
                </div>
                <div className="p-5 min-w-[70%] lg:max-h-[480px] overflow-hidden lg:overflow-y-scroll content-main">
                    <h1 className="text-2xl font-bold text-center">
                        User Information
                    </h1>
                    <div className="p-3">
                        <div>
                            <span className="hidden lg:inline">
                                Tên Đăng Nhập:{" "}
                            </span>
                            <span className="lg:inline flex justify-center items-center">
                                crodic3009
                            </span>
                        </div>
                    </div>
                    <p className="border w-full"></p>
                    <div className="p-3 flex flex-col lg:flex-row lg:mt-0 justify-between lg:items-center">
                        <div>
                            <span>Email: </span>
                            <span>crodic3009@gmail.com</span>
                        </div>
                        <div className="mt-2">
                            <span>Đổi Thông Tin</span>
                        </div>
                    </div>
                    <p className="border w-full"></p>
                    <div className="p-3 flex flex-col lg:flex-row lg:mt-0 justify-between lg:items-center">
                        <div>
                            <span>Mật Khẩu: </span>
                            <span>********</span>
                        </div>
                        <div className="mt-2">
                            <span>Đổi Mật Khẩu</span>
                        </div>
                    </div>
                    <p className="border w-full"></p>
                    <div className="p-3 mt-2 flex justify-end">
                        <Button type="primary" size="large" danger>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileUser;
