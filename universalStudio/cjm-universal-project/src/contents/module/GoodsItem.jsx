// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// 제이쿼리
import $ from "jquery";
import { useEffect } from "react";

export function GoodsItem(props) {
    console.log("props.cat :", props.cat);
    const categoryGoods = props.cat[props.category] || [];

    // 이미지 클릭시 모달창
    const showGoodsImg = (img, usage) => {
        const top_area = $('.top-area');
        const modelwrap = $(".img-model-wrap");
        const cbtn = $(".cbtn");
        const goods_tit = $(".goods-tit");
        const goods_img = $(".goods-img");

        goods_tit.text(usage);
        goods_img.attr("src", process.env.PUBLIC_URL + `/images/goods/${img}`);

        modelwrap.fadeIn(300);
        top_area.fadeOut(300);
        
        cbtn.click(() => {
            modelwrap.fadeOut(300);
            top_area.fadeIn(300);
        });
    };

    useEffect(()=>{

        const showGoodsItem = (txt) => {
            const target = document.querySelectorAll(txt);
            target.forEach((v, i) => {
                const tgPosition = v.getBoundingClientRect().top;
                if(tgPosition < window.innerHeight){
                    v.classList.add('on');
                }else{
                    v.classList.remove('on');
                }
            });
        }

        const scrollHandle = () => {
            showGoodsItem('.goods_img');
        }

        window.addEventListener('scroll', scrollHandle);
        return(()=>window.removeEventListener('scroll', scrollHandle));
    })
    return (
        <>
            <div className="goods_bx_wrap">
                {categoryGoods.map((v, i) => (
                    <div className="goods_bx" key={i} onClick={() => showGoodsImg(v.image, v.usage)}>
                        <div className="goods_img">
                            <img src= {process.env.PUBLIC_URL+ `/images/goods/${v.image}`} alt="" />
                        </div>
                        <div className="goods_content">
                            <span className="goods_store">판매 점포: {v.store}</span>
                            <span className="goods_title">{v.itemGoods}</span>
                            <span className="goods_usage">{v.usage}</span>
                            <span className="goods_content">{v.content}</span>
                        </div>
                    </div>
                ))}
            </div>
            {/* 사진 클릭시 모달창 */}
            <section className="img-model-wrap">
                <div className="img-model-box">
                    <h2 className="goods-tit"></h2>
                    <img className="goods-img" src="" alt="굿즈" />
                    <FontAwesomeIcon className="cbtn" icon={faXmark} />
                </div>
            </section>
        </>
    );
}
