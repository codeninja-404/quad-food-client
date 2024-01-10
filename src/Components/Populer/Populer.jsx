import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import "./Styles.css";
import { Navigation } from "swiper/modules";
import PopulerItemCard from "./PopulerItemCard";
import { useContext } from "react";
import { ItemContext } from "../../Api/ItemProvider";
import { CardPlacehoderSkeleton } from "../Shared/CardPlacehoderSkeleton";

const Populer = () => {
  const { data, loading } = useContext(ItemContext);
  console.log(data, loading);
  const foodItems = data.Items;
  const popularFoods = foodItems?.filter((item) => item.IsPopular === true);

  return (
    <div
      className="mx-auto  max-w-screen-xl
     text-center"
    >
      <div className="flex mx-4 justify-between items-center">
        <div>
          <h1 className="text-3xl">Populer</h1>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-[#ff5600] text-xl">AddMore</p>
          <div className="flex gap-2 px-4">
            <div className="image-swiper-button-prev">
              <MdArrowBackIos className="text-xl" />
            </div>
            <div className="image-swiper-button-next">
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
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
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
            {popularFoods?.map((item) => (
              <SwiperSlide key={item.Id}>
                <PopulerItemCard item={item}></PopulerItemCard>
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </div>
  );
};

export default Populer;
