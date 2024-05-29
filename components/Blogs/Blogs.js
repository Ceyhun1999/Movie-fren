import Image from "next/image";
import stormImg from "../../public/img/storm.png";

import styles from "./style.module.css";
import Link from "next/link";
import { getBlogsData } from "../../api/getMoviesData";

const Blogs = async () => {
    const blogs = await getBlogsData();
    return (
        <section>
            <div className="container">
                <div className={styles.section__title}>
                    <Image src={stormImg} alt="Storm" width={40} height={40} />
                    <h2>BLogs</h2>
                </div>
                <div className={styles.blogs__inner}>
                    {blogs.map((item) => (
                        <div
                            style={{
                                background:
                                    `url(${item.img}) center/cover`,
                            }}
                        >
                            <h3>{item.title}</h3>
                            <div className={styles.overlay}></div>
                            <Link className={styles.btn} href={""}>
                                Read more
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
