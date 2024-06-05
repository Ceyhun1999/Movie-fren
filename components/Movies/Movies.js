"use client";
import { CiStar } from "react-icons/ci";
import { TbClockHour4 } from "react-icons/tb";

import stormImg from "../../public/img/storm.png";
import Image from "next/image";

import styles from "./style.module.css";
import { FaPlay } from "react-icons/fa";
import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { getMoviesData } from "../../api/getMoviesData";
import Link from "next/link";

function Movies({ movies, title }) {
    const [data, setData] = useState(movies);
    const [filteredData, setFilteredData] = useState(movies);
    const [value, setValue] = useState("");

    const handlePagination = async (e, page) => {
        const movies = await getMoviesData(page);
        setFilteredData(movies);
        setValue("");
    };

    const onChangeValue = (e) => setValue(e.target.value);
    const onSearchMovieByTitle = () => {
        const filteredMovies = filteredData.filter((movie) => movie.title.toLowerCase().includes(value.toLowerCase()));
        setFilteredData(filteredMovies);
    };

    useEffect(() => {
        console.log(filteredData);
    }, [filteredData]);

    return (
        <section className={styles.movies}>
            <div className="container">
                <div className={styles.section__title}>
                    <Image src={stormImg} alt="Storm" width={40} height={40} />
                    <h2>{title}</h2>
                </div>
                <div className={styles.blockSearch}>
                    <input value={value} onChange={onChangeValue} type="text" className={styles.input} />
                    <button onClick={onSearchMovieByTitle} className={styles.btn}>
                        Search
                    </button>
                    <Pagination count={3} size="large" onChange={handlePagination} />
                </div>
                <div className={styles.movies__list}>
                    {filteredData.length === 0 ? (
                        <p style={{ fontSize: "40px", color: "#fff" }}>Фильмов на этой странице не найдена (попробуйте найти в других страницах)</p>
                    ) : (
                        filteredData.map((movie, index) => (
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
                                <Link target="_blank" href={movie.video} className={styles.movie__playBtn}>
                                    <FaPlay color="#fff" size={30} />
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

export default Movies;
