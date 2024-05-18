"use client";
import { CiStar } from "react-icons/ci";
import { TbClockHour4 } from "react-icons/tb";

import stormImg from "../../public/img/storm.png";
import Image from "next/image";

import styles from "./style.module.css";
import { FaPlay } from "react-icons/fa";
import { Pagination } from "@mui/material";
import { useState } from "react";
import { getMoviesData } from "../../api/getMoviesData";

function Movies({ movies, title }) {
    const [data, setData] = useState(movies);
    const handlePagination = async (e, page) => {
        const movies = await getMoviesData(page);
        setData(movies);
    };

    return (
        <section className={styles.movies}>
            <div className="container">
                
                <div className={styles.section__title}>
                    <Image src={stormImg} alt="Storm" width={40} height={40} />
                    <h2>{title}</h2>
                </div>
                <Pagination count={2} size="large" onChange={handlePagination} />
                <div className={styles.movies__list}>
                    {data.map((movie, index) => (
                        <div
                            key={movie.title + index}
                            className={styles.movie__card}
                            style={{
                                background: `url(${movie.img}) center/cover`,
                            }}
                        >
                            <div className={styles.movie__detail}>
                                <h3>{movie.title}</h3>
                                <div className={styles.movie__detailInfo}>
                                    <span>
                                        <CiStar size={25} color="#e2e2e2" />
                                        {movie.star}
                                    </span>
                                    <span>
                                        <TbClockHour4 size={25} color="#e2e2e2" />
                                        {movie.time}
                                    </span>
                                </div>
                                <p className={styles.movie__type}>{movie.type}</p>
                            </div>
                            <div className={styles.movie__playBtn}>
                                <FaPlay color="#fff" size={30} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Movies;
