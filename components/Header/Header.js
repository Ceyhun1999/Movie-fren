"use client";

import Image from "next/image";
import { menuItems } from "../../constants";
import { IoMenuSharp } from "react-icons/io5";

import styles from "./style.module.css";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [mobileMenuStatus, setMobileMenuStatus] = useState(false);
    const handleChangeMobileMenuStatus = () => setMobileMenuStatus((prev) => !prev);
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__content}>
                    <Link href={'/'}>
                        <Image src="/img/logo.svg" width={100} height={50} alt="logo" />
                    </Link>
                    <nav className={styles.nav}>
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={item.title + index}>
                                    <Link href={item.href}>
                                        {item.icon}
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.menuMobileBtn} onClick={handleChangeMobileMenuStatus}>
                            <IoMenuSharp color="#fff" size={25} />
                        </div>
                        <MobileMenu
                            mobileMenuStatus={mobileMenuStatus}
                            handleChangeMobileMenuStatus={handleChangeMobileMenuStatus}
                        />
                    </nav>
                </div>
            </div>
        </header>
    );
}
