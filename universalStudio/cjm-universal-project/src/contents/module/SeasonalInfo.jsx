// 시즈널메뉴 데이터 가져오기
import { seasonalMenu } from "../../data/seasonalMenu";
// CSS 가져오기
import "../../css/seasonal_restaurant.css";
// 폰트어썸
import { faUtensils, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard, faFileLines } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Map } from "./Map";
import { MoveAgency } from "./MoveAgency";
import { useEffect } from "react";

export function SeasonalInfo(props) {
    const selData = seasonalMenu[props.menu];
    const outline_color = props.color;
    console.log(selData);

    useEffect(()=>{


        const showMenu = (txt) => {
            const menuInfo = document.querySelectorAll(txt);
            menuInfo.forEach((v, i) => {
                const menuInfoPosition = v.getBoundingClientRect().top;
                if(menuInfoPosition < window.innerHeight){
                    v.classList.add('on');
                }else{
                    v.classList.remove('on');
                }
            })
        }

        const scrollHandel = () => {
            showMenu('.menu_pickup_info_wrap');
        }

        window.addEventListener('scroll', scrollHandel);
        return(()=>window.removeEventListener('scroll', scrollHandel));
    }, []);

    return (
        <div className="seasonal_restaurant_wrap" key={selData.idx}>
            <div className="seasonal_restaurant_bx">
                <div className="restaurant_bx">
                    {/* <!-- 레스토랑 건물 사진 이미지 --> */}
                    <div className="restaurant_building_img">
                        <div className={`restaurant_img${selData.idx} restaurant_img`}></div>
                    </div>
                    {/* <!-- 레스토랑 로고 + 컨텐츠박스 wrap --> */}
                    <div className="restaurant_explanation ">
                        {/* <!-- 레스토랑 로고 --> */}
                        <div className="col-3">
                            <div className={`restaurant_logo${selData.idx} restaurant_logo`}></div>
                            <div className="restaurant_caution">
                                <p>에어리어</p>
                                <p>할리우드</p>
                                <p>파크 맵</p>
                                <p>파크 정보</p>
                            </div>
                        </div>
                        <div className="restaurant_content_wrap col-8">
                            <span>푸드&레스토랑</span>
                            <h1>{selData.location}</h1>
                            <div className="restaurant_method">
                                <table>
                                    <tr>
                                        <td><FontAwesomeIcon icon={faUtensils} /></td>
                                        <td>서비스 타입</td>
                                        <td>{selData.service_type}</td>
                                    </tr>
                                    <tr>
                                        <td><FontAwesomeIcon icon={faCreditCard} /></td>
                                        <td>결제방법</td>
                                        <td>{selData.payment_method}</td>
                                    </tr>
                                    <tr>
                                        <td><FontAwesomeIcon icon={faFileLines} /></td>
                                        <td>제공 메뉴</td>
                                        <td>{selData.menu_provided}</td>
                                    </tr>
                                    <tr>
                                        <td><FontAwesomeIcon icon={faUserShield} /></td>
                                        <td colSpan={2}>안심·안전한 파크 운영</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MoveAgency />
            {/* <!-- 레스토랑 중간 컨텐츠 --> */}
            <div className="restaurant_main_content_wrap Recommended_menu_information">
                {/* <!-- <div className="restaurant_img1 restaurant_img"></div> --> */}
                {/* <!-- 레스토랑 메뉴 소개 --> */}
                <div className="seasonal_restaurant_product">
                    <div className="product_detail">
                        <div className="detail_img">
                            <img className="move_sun" src= {process.env.PUBLIC_URL+ "/images/seasonal/character/character2.png"} alt="해" />
                            {/* <div className="product_detail_img"> */}
                            <img className="product_detail_img" src= {process.env.PUBLIC_URL+ "/images/seasonal/character/character1.png"} alt="사람" />
                        </div>
                        {/* </div> */}

                        <h1>{selData.title}</h1>
                        <p>{selData.sub_title}</p>

                    </div>
                    {/* <!-- 픽업메뉴 정보 --> */}
                    <div className="restaurant_pickup_info">
                        <h2>픽업 메뉴 정보</h2>
                        {/* <!-- 픽업메뉴정보래핑 --> */}
                        <div className="menu_pickup_info_wrap">
                            {/* <!-- menu_pickup_info : 픽업메뉴&&추천메뉴 반복! --> */}
                            {/* <!-- 픽업메뉴 --> */}
                            {selData.pickup_menu.map((v, i) => (
                                <div
                                    className="menu_pickup_info"
                                    key={i}
                                    style={{ outline: `3px solid ${outline_color}` }}
                                >
                                    <div className="menu_pick_img">
                                        <img
                                            src={process.env.PUBLIC_URL+ `/images/seasonal/seasonal${selData.idx}/${v.image}`}
                                            alt={`픽업메뉴이미지${v.idx}`}
                                        />
                                    </div>
                                    <div className="menu_pickup_detail">
                                        <h3 style={{ outline: `3px solid ${outline_color}` }}>{v.menu}</h3>
                                        {v.price != "" && <span className="menu_pickup_price">{v.price}</span>}
                                        <div className="menu_pickup_ingredient">{v.menu_description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* <!-- 추천 메뉴 --> */}
                    <div className="restaurant_pickup_info" style={{ marginTop: "80px" }}>
                        <h2>추천 메뉴 정보</h2>
                        {/* <!-- 픽업메뉴정보래핑 --> */}
                        <div className="menu_pickup_info_wrap">
                            {/* <!-- menu_pickup_info : 픽업메뉴&&추천메뉴 반복! --> */}
                            {/* <!-- 픽업메뉴 --> */}
                            {selData.recommended_menu.map((v, i) => (
                                <div
                                    className="menu_pickup_info"
                                    key={i}
                                    style={{ outline: `3px solid ${outline_color}` }}
                                >
                                    <div className="menu_pick_img">
                                        <img
                                            src={process.env.PUBLIC_URL+ `/images/seasonal/seasonal${selData.idx}/${v.image}`}
                                            alt={`픽업메뉴이미지${v.idx}`}
                                        />
                                    </div>
                                    <div className="menu_pickup_detail">
                                        <h3 style={{ outline: `3px solid ${outline_color}` }}>{v.menu}</h3>
                                        {v.price != "" && <span className="menu_pickup_price">{v.price}</span>}
                                        <div className="menu_pickup_ingredient">{v.menu_description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* <!-- 레스토랑 배경 사진 --> */}
                    <div className="restaurant_bg_wrap">
                        <div className="restaurant_bg_img">
                            <img
                                src= {process.env.PUBLIC_URL+ `/images/seasonal/restaurant_bg/${selData.restaurant_bg}`}
                                alt={`${selData.location} 배경`}
                            />
                        </div>
                    </div>
                    <Map shop_info={selData.restaurant_map} shop_location={selData.location} cat='food' />

                </div>
            </div>
        </div>
    );
}
