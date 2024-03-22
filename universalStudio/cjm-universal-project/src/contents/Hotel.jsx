import { Link } from "react-router-dom";
import "../css/hotel.css";
import { hotelData } from "../data/hotel/hotelData.js";
import { useEffect, useLayoutEffect, useState } from "react";

import { UniverSalText } from "./module/UniverSalText.jsx";
import { ImgMoveSlide } from "./module/ImgMoveSlide";

export function Hotel() {
    useLayoutEffect(()=>{
        window.scrollTo(0,0);
    }, []);
    
    const [hotelBtn, setHotelBtn] = useState('official_hotel');
    const [selData, SetSelData] = useState(hotelData[hotelBtn]);
    const [hotelColor, setHotelColor] = useState('official_hotel');
    
    const hotelChangeFn = (data) => {
        setHotelBtn(data);
        setHotelColor(data);
    }
    useEffect(()=>{
        const selectedData = hotelData[hotelBtn];
        SetSelData(selectedData);
    }, [hotelBtn]);

    const linkCode = (data) =>{
        console.log(data);
        return(
            <>
                <p>{data.split('^')[0]}</p>
                <p>{data.split('^')[1]}</p>
            </>
        )
    };



    return (
        <>
            <div className="partner-hotel-wrap">
                <div className="partner-hotel-bx">
                    <ul>
                        <li>
                            <button className={hotelColor === 'official_hotel'? 'selectColor' : '' } onClick={() => hotelChangeFn('official_hotel')} key={0}>
                                <span>공식호텔</span>
                            </button>
                        </li>
                        <li>
                            <button className={hotelColor === 'affiliate_hotel'? 'selectColor' : '' } onClick={() => hotelChangeFn('affiliate_hotel')} key={1}>
                                <span>제휴호텔</span>
                            </button>
                        </li>
                        <li>
                            <button className={hotelColor === 'related_hotel'? 'selectColor' : '' } onClick={() => hotelChangeFn('related_hotel')} key={2}>
                                <span>관련호텔</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="partner-hotel-cont">
                    {selData.map((v, i) => (
                        <div className="hotel-bx" key={i}>
                            <div className="hotel-img">
                                <img src= {process.env.PUBLIC_URL+ `/images/${v.img}`} alt="호텔이미지" />
                            </div>
                            <div className="hotel-desc">
                                <h1>{v.name}</h1>
                                <h2>
                                    {v.desc.indexOf("^") == -1? v.desc : linkCode(v.desc)}
                                </h2>
                                {v.btn != "" && (
                                    <Link target="_blank" to={v.link}>
                                        <button>{v.btn}</button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <UniverSalText />
            <ImgMoveSlide imgMove="hotel" />
        </>
    );
}
