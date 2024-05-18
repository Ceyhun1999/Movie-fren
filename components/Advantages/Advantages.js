import Image from "next/image";
import { advantagesItems } from "../../constants";
import styles from "./style.module.css";

function Advantages() {
    return (
        <section>
            <div className="container">
                <div className={styles.advantages}>
                    <h2>HOLAA IS OFFERS SUPERIOR LIVE TV STREAMING</h2>
                    <div className={styles.advantages__row}>
                        {advantagesItems.map((item, index) => (
                            <div key={item.title + index}>
                                <Image src={item.img} width={55} height={45} alt={item.title}/>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Advantages;
