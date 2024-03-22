import React, { useEffect, useLayoutEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";

// GoodsCont
import { Supermario } from "./GoodsCont/Supermario";
import { Snoopy } from "./GoodsCont/Snoopy";
import { HarryPotter } from "./GoodsCont/HarryPotter";
import { Sesame } from "./GoodsCont/Sesame";
import { Spiderman } from "./GoodsCont/Spiderman";
import { JurassicPark } from "./GoodsCont/JurassicPark";

// 지도
import { Map } from "./module/Map";

import { ImgMoveSlide } from "./module/ImgMoveSlide";

// CSS
import "../css/goods.css";

// 스와이퍼
import { Caution } from "./module/Caution";
import { GoodsMain } from "./GoodsCont/GoodsMain";
import { HelloKitty } from "./GoodsCont/HelloKitty.jsx";
import { SwiperSec } from "./pages/plugin/SwiperSec";
import { Minion } from "./GoodsCont/Minion";

// import { Banner } from './module/Banner';

export function Goods() {
    useLayoutEffect(()=>{
        window.scrollTo(0,0);
    }, []);
    return (
        <>
            <div className="goods_wrap">
                <Routes>
                    <Route index element={<GoodsMain />} />
                    <Route path="supermario" element={<Supermario />} />
                    <Route path="snoopy" element={<Snoopy />} />
                    <Route path="harryPotter" element={<HarryPotter />} />
                    <Route path="sesame" element={<Sesame />} />
                    <Route path="spiderman" element={<Spiderman />} />
                    <Route path="jurassicPark" element={<JurassicPark />} />
                    <Route path="helloKitty" element={<HelloKitty />} />
                    <Route path="minion" element={<Minion />} />
                </Routes>
                
                <SwiperSec category="goods" />
                <Caution caution="goodsCaution" />
                <ImgMoveSlide imgMove="goods" />
            </div>
        </>
    );
}
