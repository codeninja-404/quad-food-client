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
      <div className="flex justify-between">
        <div>
<h1>Populer</h1>
        </div>
        <div>
        <div className="flex gap-2">
      <div className="image-swiper-button-prev"><MdArrowBackIos /></div>
        <div className="image-swiper-button-next"><MdArrowForwardIos /></div>
      </div>
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={1}
        // effect={"coverflow"}
        grabCursor={true}
        className="mySwiper"
        navigation={{
            nextEl: '.image-swiper-button-next',
            prevEl: '.image-swiper-button-prev',
            disabledClass:'.swiper-button-disabled'
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
