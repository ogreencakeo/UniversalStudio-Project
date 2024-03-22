import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../../css/area_swiper.css";

import { Navigation, Pagination, Autoplay} from "swiper/modules";
// 데이터
import { area_data } from "../../../data/module_data/area_data.js";
import { Link } from "react-router-dom";

export function AreaSwiper(props) {
    const selData = area_data;

    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}

            pagination={{
                clickable: true,
            }}
            loop={false}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            breakpoints={{
                300: {
                    slidesPerView: 1,
                },
                500: {
                    slidesPerView: 2,
                },
                750: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            }}
            className="mySwiper3"
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
        >
            {selData.map((v, i) => (
                <SwiperSlide key={i}>
                    <div className="area-swiper-bx">
                        <div className="area-swiper-img">
                            <img src={process.env.PUBLIC_URL + `/images/${v.img}`} alt="에어리어 이미지" />
                            <div className="img-hi">
                                <h5>area</h5>
                                <p>{v.txt}</p>
                            </div>
                        </div>
                        <h1>{v.name}</h1>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
} // SwiperApp 컴포넌트 //////////
