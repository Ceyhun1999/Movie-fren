const { CgWebsite } = require("react-icons/cg");
const { FaBlog, FaQuestion, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaFacebookF } = require("react-icons/fa");
const { IoHomeOutline } = require("react-icons/io5");

export const menuItems = [
    {
        title: "Home",
        icon: <IoHomeOutline />,
    },
    {
        title: "About",
        icon: <CgWebsite />,
    },

    {
        title: "Faq",
        icon: <FaQuestion />,
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
