import { useEffect } from "react";
import { cautionData } from "../../data/module_data/caution_data";

export function Caution(props) {
    const selData = cautionData[props.caution];
    const cautionImg = {
        "restaurantCaution" : "character4.png",
        "goodsCaution" : "character5.png",
        "attractionCaution" : "character3.png",
    };

    useEffect(()=>{
        const showCaution = (txt) => {
            const tg = document.querySelector(txt);
            console.log('tg', tg);
            if(tg){
                const tgPosition = tg.getBoundingClientRect().top;
                if(tgPosition < window.innerHeight){
                    tg.classList.add('on');
                }else{
                    tg.classList.remove('on');
                }
            }
        };

        const handleScroll = () => {
            showCaution('.goods_caution_img');
        };

        window.addEventListener('scroll', handleScroll);
        return(()=>window.removeEventListener('scroll', handleScroll));
    }, []);

    return (
        <div className="goods_caution_wrap">
            <div className="goods_caution_img">
                <img src= {process.env.PUBLIC_URL + `/images/character/${cautionImg[props.caution]}`} alt="굿즈 주의사항" />
            </div>
            <div className="goods_caution_content">
                {
                    selData.map((v, i) =>
                        <div key={i}>
                            <p>{v}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
