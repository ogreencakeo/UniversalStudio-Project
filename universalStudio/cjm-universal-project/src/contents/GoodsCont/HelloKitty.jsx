
import { GoodsItem } from "../module/GoodsItem";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { GoodsAd } from "./GoodsAd";
// 데이터
import { goods } from "../../data/goods/goodsData";
import { Map } from "../module/Map";
import { useEffect } from "react";

export function HelloKitty(){
    useEffect(()=>{
        window.scrollTo(0,0)
    }, []);
    return (
        <>
            <GoodsAd ad='helloKitty' bg_color = '#fcc7f4'/>
            <GoodsSwiper cats='goods'/>
            <GoodsItem cat={goods[6]} category="helloKitty" />
            <Map shop_info='map7' shop_location='헬로키티' cat='goods' />
        </>
    );
}