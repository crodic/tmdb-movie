import React from "react";
import { MenuItem, Typography } from "@material-tailwind/react";
import {
    HomeIcon,
    NewspaperIcon,
    ArrowTrendingUpIcon,
    FilmIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navListItems = [
    {
        label: "Home",
        icon: HomeIcon,
        to: "/",
    },
    {
        label: "News",
        icon: NewspaperIcon,
        to: "/news",
    },
    {
        label: "Trending",
        icon: ArrowTrendingUpIcon,
        to: "/trending",
    },
    {
        label: "Popular",
        icon: FilmIcon,
        to: "/popular",
    },
];

export default function NavList() {
    return (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            {navListItems.map(({ label, icon, to }, key) => (
                <Typography
                    key={label}
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                >
                    <MenuItem className="flex items-center gap-2 lg:rounded-full">
                        {React.createElement(icon, {
                            className: "h-[18px] w-[18px]",
                        })}{" "}
                        <NavLink
                            to={to}
                            className={({ isActive }) =>
                                isActive ? "text-red-50" : ""
                            }
                        >
                            {label}
                        </NavLink>
                    </MenuItem>
                </Typography>
            ))}
        </ul>
    );
}
