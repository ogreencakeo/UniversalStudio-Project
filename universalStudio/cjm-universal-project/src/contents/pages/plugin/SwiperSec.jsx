import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../../css/swiper_sec.css";

import { Navigation } from "swiper/modules";
// 데이터
import { cartData } from "../../../data/module_data/cart_data";
import { Link } from "react-router-dom";

export function SwiperSec(props) {
    const selData = cartData[props.category];
    console.log("스와이프 selData :", selData);

    const [moveMainImg, setMoveMainImg] = useState(true);


    useEffect(() => {
        const linkScrollHandler = () => {
            window.scrollTo(0, 0);
        }

        const swiperLinks = document.querySelectorAll('.swiper-link-bx');
        swiperLinks.forEach(link => {
            link.addEventListener('click', linkScrollHandler);
        });

        return () => {
            swiperLinks.forEach(link => {
                link.removeEventListener('click', linkScrollHandler);
            });
        }
    }, []); // 빈 배열을 전달하여 한 번만 실행되도록 함
    return (
        <div className="swiper-sec-wrap">
            <h1 className="swiper-sec-main-tit">
                {props.category == "restaurant" ? "푸드&레스토랑 카트보기" : "굿즈 카트보기"}
            </h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    300 : {
                        slidesPerView : 1,
                    },
                    650: {
                        slidesPerView: 2,
                    },
                    1000: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
                className="mySwiper2"
            >
                {selData.map((v, i) => (
                    <SwiperSlide className="swiper_sec" key={i}>
                        <Link className="swiper-link-bx" to={props.category=='restaurant'? `/seasonalMenu/restaurant${i + 1}` : `/goods/${v.link}` }
                        onMouseMove={()=>setMoveMainImg(i)} onMouseOut={()=>setMoveMainImg(true)}>
                            <li key={i}>
                                <div className="swiper-sec-img">
                                    {
                                        moveMainImg===i ? 
                                        <img src={process.env.PUBLIC_URL+ `${v.logo}`} alt={v.title} /> :
                                        <img src={process.env.PUBLIC_URL+ `${v.img}`} alt={v.title} /> 
                                    }
                                </div>
                                <h2 className="swipe_sec_cat">{v.category}</h2>
                                <h2 className="swipe_sec_tit">{v.title}</h2>
                            </li>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
} // SwiperApp 컴포넌트 //////////
