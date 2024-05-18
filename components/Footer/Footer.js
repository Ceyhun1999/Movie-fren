import Image from "next/image";
import styles from "./style.module.css";
import Socials from "../Socials/Socials";
import { menuItems } from "../../constants";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__top}>
                    <div>
                        <Image src="/img/logo.svg" width={100} height={50} alt="logo" />
                        <p
                            style={{
                                margin: "10px 0",
                            }}
                        >
                            Connected with us!
                        </p>
                        <Socials />
                    </div>
                    <div>
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={item.title + index}>{item.title}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>© Holaa 2024, Designed CodeXshaper</p>
                    <p>Privacy Policy About Us</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
