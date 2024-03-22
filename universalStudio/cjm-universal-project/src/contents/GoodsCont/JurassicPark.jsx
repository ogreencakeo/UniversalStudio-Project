import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { GoodsAd } from "./GoodsAd";
import { Map } from "../module/Map";
import { useEffect } from "react";
export function JurassicPark() {
    useEffect(()=>{
        window.scrollTo(0,0)
    }, []);
    return (
        <>
            <GoodsAd ad='jurassicPark' bg_color = '#91e39f'/>
            <GoodsSwiper cats='goods' />
            <GoodsItem cat={goods[5]} category="jurassicPark" />
            <Map shop_info='map6' shop_location='쥬라기 월드' cat='goods' />
        </>
    );
}
