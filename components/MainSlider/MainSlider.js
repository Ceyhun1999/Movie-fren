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
                            <FaStar color="#696969" size={20} /> 4.9 Reviews
                        </div>
                        <div>
                            <MdAccessTimeFilled color="#696969" size={20} /> 02h 30m
                        </div>
                        <div>
                            <MdHighQuality color="#696969" size={20} />
                            4k Quality
                        </div>
                    </div>
                    <h2>THE DARK BEAUTY</h2>
                    <p>Enjoy your favorite moves, tv show, sports, news, Live event and entertainment streaming now!</p>
                    <div className={styles.btns}>
                        <Link target="_blank" className={styles.watchBtn} href={"https://www.youtube.com/watch?v=pJpkk4QZcnY"}>
                            <FaPlay />
                            Watch now
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
