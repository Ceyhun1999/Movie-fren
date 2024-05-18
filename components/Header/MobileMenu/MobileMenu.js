"use client";

import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import styles from "./style.module.css";
import { menuItems } from "../../../constants";
import Socials from "../../Socials/Socials";

function MobileMenu({ mobileMenuStatus, handleChangeMobileMenuStatus }) {
    return (
        <div className={`${styles.mobileMenu} ${mobileMenuStatus ? `${styles.active}` : ""}`}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Image src="/img/logo.svg" width={100} height={50} alt="logo" />
                <button className={styles.closeBtn} onClick={handleChangeMobileMenuStatus}>
                    <RxCross2 color="#fff" size={18} />
                </button>
            </div>
            <ul className={styles.mobileMenuList}>
                {menuItems.map((item, index) => (
                    <li key={item.title + index}>{item.title}</li>
                ))}
            </ul>
            <Socials />
        </div>
    );
}

export default MobileMenu;
