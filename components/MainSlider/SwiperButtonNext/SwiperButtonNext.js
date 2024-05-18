import { FaChevronLeft } from "react-icons/fa";
import { useSwiper } from "swiper/react";

const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
        <div onClick={() => swiper.slidePrev()} className="swiperSlider-button-prev">
            <FaChevronLeft color="#fff" />
        </div>
    );
};

export default SwiperButtonNext;
