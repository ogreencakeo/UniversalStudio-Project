import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../css/swiper.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
export function GoodsSwiper(props) {
   

    const makeCod = () => {
        const temp = [];
        for (let i = 0; i < 7; i++) {
            temp[i] = (
                <SwiperSlide key={i}>
                    <img src= {process.env.PUBLIC_URL + "/images/goods/logoSwipe/" + (i + 1) + ".jpg"} alt="Logo image" />
                </SwiperSlide>
            );
        }
        return temp;
    };
    const makeCod2 = () => {
        const temp = [];
        for (let i = 0; i <6 ; i++) {
            temp[i] = (
                <SwiperSlide key={i}>
                    <img src={process.env.PUBLIC_URL + "/images/area/main/" + (i + 1) + ".jpg"} alt="Logo image" />
                </SwiperSlide>
            );
        }
        return temp;
    };

    return (
        <>
            <div className="goods-top-cont-wrap">
                {props.cats==='goods'? <h1>굿즈를 판매하고 있는 다른 숍!</h1> : ''}
                <Swiper
                    slidesPerView={3}
                    spaceBetween={50}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                        },
                        550: {
                            slidesPerView: 2,
                        },
                        1000: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                    className="mySwiper"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {props.cats === 'goods'? makeCod() : makeCod2()}
                </Swiper>
            </div>
        </>
    );
}