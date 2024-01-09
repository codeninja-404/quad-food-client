import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import "./Styles.css";
import { CardHeader, CardBody, Typography } from "@material-tailwind/react";

// import required modules
import { Navigation } from "swiper/modules";

const Populer = () => {
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
      <div className="image-swiper-button-prev"><MdArrowBackIos className="text-xl" /></div>
        <div className="image-swiper-button-next"><MdArrowForwardIos className="text-xl"/></div>
      </div>
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={1}
        grabCursor={true}
        className="mySwiper"
        navigation={{
            nextEl: '.image-swiper-button-next',
            prevEl: '.image-swiper-button-prev',
            disabledClass:'swiper-button-disabled'
          }}
  
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div>
            <CardHeader className="h-[350px] rounded-lg shadow-md  shadow-black ">
              <div className="absolute inset-0 m-0 h-full  rounded-none bg-[url('http://www.api.technicaltest.quadtheoryltd.com/Resources/Image\\Cappuchino.jpg')] bg-cover bg-center" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                CEO / Co-Founder
              </Typography>
            </CardBody>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <CardHeader className="h-[350px] rounded-lg shadow-md  shadow-black ">
              <div className="absolute inset-0 m-0 h-full  rounded-none bg-[url('http://www.api.technicaltest.quadtheoryltd.com/Resources/Image\\Cappuchino.jpg')] bg-cover bg-center" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                CEO / Co-Founder
              </Typography>
            </CardBody>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <CardHeader className="h-[350px] rounded-lg shadow-md  shadow-black ">
              <div className="absolute inset-0 m-0 h-full  rounded-none bg-[url('http://www.api.technicaltest.quadtheoryltd.com/Resources/Image\\Cappuchino.jpg')] bg-cover bg-center" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                CEO / Co-Founder
              </Typography>
            </CardBody>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <CardHeader className="h-[350px] rounded-lg shadow-md  shadow-black ">
              <div className="absolute inset-0 m-0 h-full  rounded-none bg-[url('http://www.api.technicaltest.quadtheoryltd.com/Resources/Image\\Cappuchino.jpg')] bg-cover bg-center" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                CEO / Co-Founder
              </Typography>
            </CardBody>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <CardHeader className="h-[350px] rounded-lg shadow-md  shadow-black ">
              <div className="absolute inset-0 m-0 h-full  rounded-none bg-[url('http://www.api.technicaltest.quadtheoryltd.com/Resources/Image\\Cappuchino.jpg')] bg-cover bg-center" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                CEO / Co-Founder
              </Typography>
            </CardBody>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <CardHeader className="h-[350px] rounded-lg shadow-md  shadow-black ">
              <div className="absolute inset-0 m-0 h-full  rounded-none bg-[url('http://www.api.technicaltest.quadtheoryltd.com/Resources/Image\\Cappuchino.jpg')] bg-cover bg-center" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                CEO / Co-Founder
              </Typography>
            </CardBody>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <CardHeader className="h-[350px] rounded-lg shadow-md  shadow-black ">
              <div className="absolute inset-0 m-0 h-full  rounded-none bg-[url('http://www.api.technicaltest.quadtheoryltd.com/Resources/Image\\Cappuchino.jpg')] bg-cover bg-center" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                CEO / Co-Founder
              </Typography>
            </CardBody>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Populer;
