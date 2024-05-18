"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import styles from "./style.module.css";
import Link from "next/link";

import { FaPlay, FaStar } from "react-icons/fa";
import { MdHighQuality, MdAccessTimeFilled } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";

import SwiperButtonNext from "./SwiperButtonNext/SwiperButtonNext";
import SwiperButtonPrev from "./SwiperButtonPrev/SwiperButtonPrev";

function MainSlider() {
    const swiper = useSwiper();
    console.log(swiper);

    return (
        <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
            <div className={styles.slider__btns}>
                <SwiperButtonNext />
                <SwiperButtonPrev />
            </div>
            <SwiperSlide className={styles.swiper__slide}>
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
                        <Link className={styles.watchBtn} href={""}>
                            <FaPlay />
                            Watch now
                        </Link>
                        <Link className={styles.trailerBtn} href={""}>
                            <RiMovie2Fill size={20} />
                            Play trailer
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
            </SwiperSlide>
            <SwiperSlide className={styles.swiper__slide}>
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
                        <Link className={styles.watchBtn} href={""}>
                            <FaPlay />
                            Watch now
                        </Link>
                        <Link className={styles.trailerBtn} href={""}>
                            <RiMovie2Fill size={20} />
                            Play trailer
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
            </SwiperSlide>
            <SwiperSlide className={styles.swiper__slide}>
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
                        <Link className={styles.watchBtn} href={""}>
                            <FaPlay />
                            Watch now
                        </Link>
                        <Link className={styles.trailerBtn} href={""}>
                            <RiMovie2Fill size={20} />
                            Play trailer
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
            </SwiperSlide>
        </Swiper>
    );
}

export default MainSlider;
