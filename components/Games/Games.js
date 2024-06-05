"use client";
import { CiStar } from "react-icons/ci";
import { TbClockHour4 } from "react-icons/tb";

import stormImg from "../../public/img/storm.png";
import Image from "next/image";

import styles from "./style.module.css";
import { FaBookReader } from "react-icons/fa";
import Link from "next/link";
import { SiAmazongames } from "react-icons/si";

function Games({ games, title }) {
    return (
        <section className={styles.games}>
            <div className="container">
                <div className={styles.section__title}>
                    <Image src={stormImg} alt="Storm" width={40} height={40} />
                    <h2>{title}</h2>
                </div>

                <div className={styles.games__list}>
                    {games.map((game, index) => (
                        <div
                            key={game.title + index}
                            className={styles.game__card}
                            style={{
                                background: `url(${game.img}) center/cover`,
                            }}
                        >
                            <div className={styles.game__detail}>
                                <h3>{game.title}</h3>
                                <div className={styles.game__detailInfo}>
                                    <span>
                                        <CiStar size={25} color="#e2e2e2" />
                                        {game.star}
                                    </span>
                                    <span>
                                        <TbClockHour4 size={25} color="#e2e2e2" />
                                        {game.time}
                                    </span>
                                </div>
                                <p className={styles.game__type}>{game.type}</p>
                            </div>
                            <Link  href={`games/${game.id}`} className={styles.game__playBtn}>
                                <SiAmazongames color="#fff" size={30} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Games;
