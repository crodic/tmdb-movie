import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
    Typography,
} from "@material-tailwind/react";
import {
    PlusIcon,
    HomeIcon,
    CogIcon,
    Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import { scrollToContent } from "../../utility/function";

export default function ContentPosition({ contentTake }) {
    const labelProps = {
        variant: "small",
        color: "red",
        className:
            "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal font-bold",
    };

    return (
        <div className="w-full ">
            <div className="font fixed right-5 bottom-5 z-30">
                <SpeedDial>
                    <SpeedDialHandler>
                        <IconButton size="lg" className="rounded-full">
                            <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
                        </IconButton>
                    </SpeedDialHandler>

                    <SpeedDialContent>
                        <SpeedDialAction className="relative">
                            <div
                                onClick={() => {
                                    scrollToContent(contentTake.upcoming);
                                }}
                            >
                                <HomeIcon className="h-5 w-5" />
                                <Typography {...labelProps}>
                                    Up Coming
                                </Typography>
                            </div>
                        </SpeedDialAction>
                        <SpeedDialAction className="relative">
                            <div
                                onClick={() => {
                                    scrollToContent(contentTake.nowplaying);
                                }}
                            >
                                <CogIcon className="h-5 w-5" />
                                <Typography {...labelProps}>
                                    Now Playing
                                </Typography>
                            </div>
                        </SpeedDialAction>
                        <SpeedDialAction className="relative">
                            <div
                                onClick={() => {
                                    scrollToContent(contentTake.toprate);
                                }}
                            >
                                <Square3Stack3DIcon className="h-5 w-5" />
                                <Typography {...labelProps}>
                                    Top Rate
                                </Typography>
                            </div>
                        </SpeedDialAction>
                    </SpeedDialContent>
                </SpeedDial>
            </div>
        </div>
    );
}
