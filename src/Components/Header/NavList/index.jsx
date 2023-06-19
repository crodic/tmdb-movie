import React from "react";
import { MenuItem, Typography } from "@material-tailwind/react";
import {
    HomeIcon,
    NewspaperIcon,
    ArrowTrendingUpIcon,
    FilmIcon,
} from "@heroicons/react/24/outline";

const navListItems = [
    {
        label: "Home",
        icon: HomeIcon,
    },
    {
        label: "News",
        icon: NewspaperIcon,
    },
    {
        label: "Trending",
        icon: ArrowTrendingUpIcon,
    },
    {
        label: "Popular",
        icon: FilmIcon,
    },
];

export default function NavList() {
    return (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            {navListItems.map(({ label, icon }, key) => (
                <Typography
                    key={label}
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                >
                    <MenuItem className="flex items-center gap-2 lg:rounded-full">
                        {React.createElement(icon, {
                            className: "h-[18px] w-[18px]",
                        })}{" "}
                        {label}
                    </MenuItem>
                </Typography>
            ))}
        </ul>
    );
}
