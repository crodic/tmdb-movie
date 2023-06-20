import React, { useState } from "react";
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import { Bars2Icon } from "@heroicons/react/24/outline";
import ProfileMenu from "./ProfileMenu";
import NavList from "./NavList";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const [auth, setAuth] = useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false)
        );
    }, []);

    return (
        <Navbar className="p-2 lg:pl-6 rounded-none">
            <div className="relative mx-auto flex items-center text-blue-gray-900">
                <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-medium">
                    <Link to="/">The Movie API</Link>
                </Typography>
                <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
                    <NavList />
                </div>
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden"
                >
                    <Bars2Icon className="h-6 w-6" />
                </IconButton>
                {auth ? (
                    <ProfileMenu />
                ) : (
                    <div className="lg:ml-auto flex">
                        <Button
                            variant="text"
                            size="sm"
                            color="blue-gray"
                            className="button-actions"
                        >
                            Sign In
                        </Button>
                        <Button
                            variant="gradient"
                            size="sm"
                            className="button-actions"
                        >
                            Sign Up
                        </Button>
                    </div>
                )}
            </div>
            <Collapse open={isNavOpen} className="overflow-scroll">
                <NavList />
            </Collapse>
        </Navbar>
    );
}
