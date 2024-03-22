import { Route, Routes } from "react-router-dom";
// import { seasonalMenu } from "../data/seasonalMenu";

// 레스토랑 라우터 모듈 불러오기
import { Restaurant1 } from "./SeasonalCont/Restaurant1";
import { Restaurant2 } from "./SeasonalCont/Restaurant2";
import { Restaurant4 } from "./SeasonalCont/Restaurant4";
import { Restaurant3 } from "./SeasonalCont/Restaurant3";
import { Restaurant5 } from "./SeasonalCont/Restaurant5";
import { Restaurant6 } from "./SeasonalCont/Restaurant6";
import { Restaurant7 } from "./SeasonalCont/Restaurant7";
import { Restaurant8 } from "./SeasonalCont/Restaurant8";

import { ImgMoveSlide } from "./module/ImgMoveSlide";
import { Caution } from "./module/Caution";
import { FoodInfo } from "./SeasonalCont/FoodInfo";
import { SwiperSec } from "./pages/plugin/SwiperSec";
import { useEffect, useLayoutEffect } from "react";

export function SeasonalMenu() {
    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    }, []);

    return (
        <>  
            <Routes>
                <Route element='' />
                <Route path="restaurant1" element={<Restaurant1 />} />
                <Route path="restaurant2" element={<Restaurant2 />} />
                <Route path="restaurant3" element={<Restaurant3 />} />
                <Route path="restaurant4" element={<Restaurant4 />} />
                <Route path="restaurant5" element={<Restaurant5 />} />
                <Route path="restaurant6" element={<Restaurant6 />} />
                <Route path="restaurant7" element={<Restaurant7 />} />
                <Route path="restaurant8" element={<Restaurant8 />} />
            </Routes>
            <SwiperSec category='restaurant' />
            <FoodInfo />
            <Caution caution='restaurantCaution' />
            <ImgMoveSlide imgMove="seasonal" />
        </>
    );
}
