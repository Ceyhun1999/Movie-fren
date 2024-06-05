"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import styles from "./style.module.css";
import Link from "next/link";

import { FaPlay, FaStar } from "react-icons/fa";
import { MdHighQuality, MdAccessTimeFilled } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";

function MainSlider() {
    return (
            <div className={styles.header__banner}>
                <div className="container">
                    <div className={styles.info}>
                        <div>
                            <FaStar color="#696969" size={20} /> 8.3 Reviews
                        </div>
                        <div>
                            <MdAccessTimeFilled color="#696969" size={20} /> 03h 00m 22s
                        </div>
                        <div>
                            <MdHighQuality color="#696969" size={20} />
                            4k Quality
                        </div>
                    </div>
                    <h2>Oppenheimer</h2>
                    <p>Oppenheimer is a 2023 epic biographical thriller drama film written, directed, and produced by Christopher Nolan. On March 10, 2024, he received an Oscar.</p>
                    <div className={styles.btns}>
                        <Link target="_blank" className={styles.watchBtn} href={"https://rutube.ru/video/b1ef29a224dbdc74562c41856e74bae9/?r=plwd"}>
                            <FaPlay />
                            Watch now
                        </Link>
                        <Link target="_blank" className={styles.trailerBtn} href={"https://rutube.ru/video/09044df69146c9890a3a6a44398dd927/?r=plwd"}>
                            <FaPlay />
                            Trailer
                        </Link>
                    </div>
                    <video
                        src="https://holaa.codexshaper.com/wp/wp-content/uploads/2024/03/e86032ef-9397-4888-9d12-7246be9d81bb.mp4"
                        loop={true}
                        preload="auto"
                        muted={true}
                        autoPlay={true}
                    ></video>
                </div>
            </div>
    );
}

export default MainSlider;
