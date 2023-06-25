import React from "react";
import {
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { getAvatar, getUserName } from "../../../Redux/selector";
import { auth } from "../../../firebase/config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateAuth } from "../../../Redux/SliceReducer/authSlice";

// profile menu component

export default function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const dispatch = useDispatch();
    const avatar = useSelector(getAvatar);
    const userName = useSelector(getUserName);
    const navigate = useNavigate();
    const profileMenuItems = [
        {
            label: `${userName}`,
        },
        {
            label: "My Profile",
            icon: UserCircleIcon,
        },
        {
            label: "Inbox",
            icon: InboxArrowDownIcon,
        },
        {
            label: "Help",
            icon: LifebuoyIcon,
        },
        {
            label: "Sign Out",
            icon: PowerIcon,
        },
    ];

    const closeMenu = (isLastItem) => {
        if (isLastItem) {
            signOut(auth)
                .then(() => {
                    if (localStorage.getItem("auth")) {
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        localStorage.removeItem("auth");
                    }
                    if (sessionStorage.getItem("auth")) {
                        sessionStorage.removeItem("token");
                        sessionStorage.removeItem("user");
                        sessionStorage.removeItem("auth");
                    }
                    dispatch(updateAuth(false));
                    navigate("/login");
                })
                .catch((error) => {
                    // An error happened.
                });
        }
        setIsMenuOpen(false);
    };

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="candice wu"
                        className="border border-blue-500 p-0.5"
                        src={avatar}
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${
                            isMenuOpen ? "rotate-180" : ""
                        }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    const isFirstItem = key === 0;
                    return (
                        <MenuItem
                            key={label}
                            onClick={() => {
                                if (label === "My Profile") {
                                    navigate("/user");
                                }
                                closeMenu(isLastItem);
                            }}
                            className={`flex items-center gap-2 rounded ${
                                isLastItem
                                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                    : ""
                            } ${
                                isFirstItem &&
                                "text-blue-800 flex justify-center"
                            }`}
                        >
                            {icon &&
                                React.createElement(icon, {
                                    className: `h-4 w-4 ${
                                        isLastItem ? "text-red-500" : ""
                                    }`,
                                    strokeWidth: 2,
                                })}
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}
