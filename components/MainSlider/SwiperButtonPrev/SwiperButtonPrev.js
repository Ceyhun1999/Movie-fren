import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return (
        <div onClick={() => swiper.slideNext()} className="swiperSlider-button-prev">
            <FaChevronRight color="#fff" />
        </div>
    );
};

export default SwiperButtonPrev;
