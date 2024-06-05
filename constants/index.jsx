const { CgWebsite, CgGames } = require("react-icons/cg");
const { FaQuestion, FaTwitter, FaLinkedin, FaInstagram, FaFacebookF } = require("react-icons/fa");
const { IoHomeOutline } = require("react-icons/io5");
import { SiBookstack } from "react-icons/si";

export const menuItems = [
    {
        title: "Home",
        icon: <IoHomeOutline />,
        href: "/",
    },
    {
        title: "Books",
        icon: <SiBookstack />,
        href: "/books",
    },
    {
        title: "Games",
        icon: <CgGames />,
        href: "/games",
    },
    {
        title: "About",
        icon: <CgWebsite />,
        href: "/about",
    },

    {
        title: "Faq",
        icon: <FaQuestion />,
        href: "/faq",
    },
];

export const socialItems = [
    {
        title: "facebook",
        icon: <FaFacebookF />,
    },
    {
        title: "twitter",
        icon: <FaTwitter />,
    },
    {
        title: "linkedin",
        icon: <FaLinkedin />,
    },
    {
        title: "instagram",
        icon: <FaInstagram />,
    },
];

export const advantagesItems = [
    {
        title: "FLEXIBLE",
        desc: "Flexible streaming allows users to use customize their viewing experience",
        img: "/img/advantages1.png",
    },
    {
        title: "SUPER FAST QUALITY",
        desc: "Flexible streaming allows users to use customize their viewing experience",
        img: "/img/advantages2.png",
    },
    {
        title: "WATCH FROM ANYWHERE",
        desc: "Flexible streaming allows users to use customize their viewing experience",
        img: "/img/advantages3.png",
    },
    {
        title: "DOWNLOAD AND GO",
        desc: "Flexible streaming allows users to use customize their viewing experience",
        img: "/img/advantages4.png",
    },
];
