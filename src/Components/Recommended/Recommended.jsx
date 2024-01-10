import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import "./Styles.css";

import { Navigation } from "swiper/modules";
import RecommendedItemCard from "./RecommendedItemCard";

const Recommended = () => {
  return (
    <div
      className="mx-auto  max-w-screen-xl
     text-center"
    >
      <div className="flex mx-4 justify-between items-center">
        <div>
          <h1 className="text-3xl">Recommended</h1>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-[#ff5600] text-xl">AddMore</p>
          <div className="flex gap-2 px-4">
            <div className="image2-swiper-button-prev">
              <MdArrowBackIos className="text-xl" />
            </div>
            <div className="image2-swiper-button-next">
              <MdArrowForwardIos className="text-xl" />
            </div>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={1}
        grabCursor={true}
        className="mySwiper"
        navigation={{
          nextEl: ".image2-swiper-button-next",
          prevEl: ".image2-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <RecommendedItemCard></RecommendedItemCard>
        </SwiperSlide>
        <SwiperSlide>
          <RecommendedItemCard></RecommendedItemCard>
        </SwiperSlide>
        <SwiperSlide>
          <RecommendedItemCard></RecommendedItemCard>
        </SwiperSlide>
        <SwiperSlide>
          <RecommendedItemCard></RecommendedItemCard>
        </SwiperSlide>
        <SwiperSlide>
          <RecommendedItemCard></RecommendedItemCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Recommended;
