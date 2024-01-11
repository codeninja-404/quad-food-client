import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import "./Styles.css";

import { Navigation } from "swiper/modules";
import RecommendedItemCard from "./RecommendedItemCard";
import { CardPlacehoderSkeleton } from "../Shared/CardPlacehoderSkeleton";
import { useContext } from "react";
import { ItemContext } from "../../Api/ItemProvider";
import { AddMore } from "../AddMore/AddMore";

const Recommended = () => {
  const { data, loading, setData } = useContext(ItemContext);

  const recommendedFoods = data.filter((item) => item.IsRecommended === true);
  return (
    <div
      className="mx-auto  max-w-screen-xl
     text-center"
    >
      <div className="flex mx-4 justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Recommended</h1>
        </div>
        <div className="flex justify-center items-center gap-4">
          <AddMore></AddMore>
          <div className="flex gap-1">
            <div className="image2-swiper-button-prev">
              <MdArrowBackIos className="text-2xl" />
            </div>
            <div className="image2-swiper-button-next">
              <MdArrowForwardIos className="text-2xl" />
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
        {loading ? (
          <>
            <SwiperSlide>
              <CardPlacehoderSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <CardPlacehoderSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <CardPlacehoderSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <CardPlacehoderSkeleton />
            </SwiperSlide>
          </>
        ) : (
          <>
            {recommendedFoods?.map((item) => (
              <SwiperSlide key={item.Id}>
                <RecommendedItemCard item={item}></RecommendedItemCard>
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </div>
  );
};

export default Recommended;
