import { Carousel } from "@material-tailwind/react";

export default function VideoSlider() {
    return (
        <Carousel
            className="rounded-xl w-[500px]"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i
                                    ? "bg-white w-8"
                                    : "bg-white/50 w-4"
                            }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            <video className="h-full w-full rounded-lg" controls>
                <source src="/src/images/testvideo.mp4" type="video/mp4" />
            </video>
            <video className="h-full w-full rounded-lg" controls>
                <source src="/src/images/testvideo.mp4" type="video/mp4" />
            </video>
        </Carousel>
    );
}
