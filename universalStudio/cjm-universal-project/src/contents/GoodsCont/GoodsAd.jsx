import React, { useEffect } from 'react';
import { goodsAdData } from '../../data/goods/goodsAdData';
import '../../css/goods_ad.css';
import { Map } from '../module/Map';

// 폰트어썸
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function GoodsAd(props) {
    const selData = goodsAdData[props.ad];
    const color = props.bg_color;
    useEffect(()=>{
        const showGoods = (txt) => {
            const target = document.querySelector(txt);
            const tgPosition = target.getBoundingClientRect().top;
            if(tgPosition < window.innerHeight){
                target.classList.add('on');
            }else{
                target.classList.remove('on');
            }
        }

        const scrollHandle = () => {
            showGoods('.goods_img_logo>img');
        }

        window.addEventListener('scroll', scrollHandle);
        return(()=> window.removeEventListener('scroll', scrollHandle));
    }, []);
    return (
        <>
            <div className="goods_ad_wrap">
                <div className='goods_ad_main_img'>
                    <img className='goods_ch3' src= {process.env.PUBLIC_URL+ "/images/goods/character/character3.png"} alt="구름" />
                    <div>
                        <img className='goods_ch4' src= {process.env.PUBLIC_URL+ "/images/goods/character/character2.png"} alt="아이" />
                    </div>
                </div>
                <div className="goods_ad_bx">
                    <div className="goods_ad">
                        <h1 className='goods_tit'>{selData.tit}</h1>
                        <div className="goods_ad_cont">
                            <div className="goods_img_logo">
                                <img src={process.env.PUBLIC_URL + `/images/${selData.logo}`} alt={selData.product} />
                            </div>
                            <div className="good_ad">
                                <span className='goods_location' style={{ backgroundColor: color }}>{selData.location}</span>
                                <div className="goods_sub_cont">
                                    <span className='goods_product'>캐릭터 상품 : {selData.product} </span>
                                    <span className='goods_cont'>{selData.cont}</span>
                                    <span className='faFaceSmileWink' style={{ color: color }}>
                                        {/* <FontAwesomeIcon icon={faFaceSmileWink} /> */}
                                        <FontAwesomeIcon icon={faSun} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}