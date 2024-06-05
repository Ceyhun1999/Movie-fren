"use client";
import { CiStar } from "react-icons/ci";
import { TbClockHour4 } from "react-icons/tb";

import stormImg from "../../public/img/storm.png";
import Image from "next/image";

import styles from "./style.module.css";
import { FaBookReader} from "react-icons/fa";
import Link from "next/link";

function Books({ books, title }) {
    return (
        <section className={styles.books}>
            <div className="container">
                <div className={styles.section__title}>
                    <Image src={stormImg} alt="Storm" width={40} height={40} />
                    <h2>{title}</h2>
                </div>

                <div className={styles.books__list}>
                    {books?.map((book, index) => (
                        <div
                            key={book.title + index}
                            className={styles.book__card}
                            style={{
                                background: `url(${book.img}) center/cover`,
                            }}
                        >
                            <div className={styles.book__detail}>
                                <h3>{book.title}</h3>
                                <div className={styles.book__detailInfo}>
                                    <span>
                                        <CiStar size={25} color="#e2e2e2" />
                                        {book.star}
                                    </span>
                                    <span>
                                        <TbClockHour4 size={25} color="#e2e2e2" />
                                        {book.time}
                                    </span>
                                </div>
                                <p className={styles.book__type}>{book.type}</p>
                            </div>
                            <Link target="_blank" href={book.href} className={styles.book__playBtn}>
                                <FaBookReader color="#fff" size={30} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Books;
