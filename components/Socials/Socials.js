import styles from "./style.module.css";
import { socialItems } from "../../constants";

function Socials() {
    return (
        <ul className={styles.socials}>
            {socialItems.map((item, index) => (
                <li key={item.title + index}>{item.icon}</li>
            ))}
        </ul>
    );
}

export default Socials;
