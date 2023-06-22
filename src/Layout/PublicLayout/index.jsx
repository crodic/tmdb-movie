import NowPlaying from "../../Components/NowPlaying";
import Search from "../../Components/SearchData";
import ShowManager from "../../Components/ShowManager";
import Slider from "../../Components/Slider";
import UpComing from "../../Components/UpComing";
import "./style.scss";

function PublicLayout() {
    return (
        <>
            <div className="w-screen max-w-[95%] mx-auto flex flex-col gap-y-10">
                <div className="min-h-[200px] lg:flex mt-5 ">
                    <Slider />
                    <div className="lg:ml-2 mt-2 lg:mt-0">
                        <ShowManager className="lg:w-[400px] h-[95px]">
                            <div className="customize-bg flex">
                                <div className="manager-information p-1">
                                    <p>Bảng Xếp Hạng</p>
                                    <p>Top những phim có lượt xem cao nhất</p>
                                </div>
                                <div className="manager-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </ShowManager>
                        <ShowManager className="lg:w-[400px] h-[95px] mt-[10px]">
                            <div className="customize-bg flex">
                                <div className="manager-information p-1">
                                    <p>Ưu Đãi Thành Viên</p>
                                    <p>
                                        Xem Ngay Những Ưu Đãi Khi Làm Thành Viên
                                    </p>
                                </div>
                                <div className="manager-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </ShowManager>
                    </div>
                </div>
                <Search />
                <UpComing />
                <NowPlaying />
            </div>
        </>
    );
}

export default PublicLayout;
