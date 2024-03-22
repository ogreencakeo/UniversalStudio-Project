import '../../css/map.css';
export function Map(props) {
    const shopInfo = props.shop_info;
    const shopLocation = props.shop_location;
    const category = props.cat;
    console.log(props.mapi);
    return (
        <>
            {/* <!-- 레스토랑 위치 사진 --> */}
            <div className="map_wrap">
                <div className="map_bx">
                    <h1>{props.cat == 'goods'?'굿즈의 위치' : props.cat=='attraction'? '어트랙션의 위치' :'레스토랑의 위치'}</h1>
                    {/* <!-- 레스토랑 지도및 설명 --> */}
                    <div className="map">
                        <div className="map_img">
                            {
                                category == 'food' &&
                                <img
                                    src= {process.env.PUBLIC_URL+ `/images/seasonal/restaurant_map/${shopInfo}`}
                                    alt={`${shopLocation} 지도`}
                                />
                            }
                            {
                                category == 'goods' &&
                                <img
                                    src={process.env.PUBLIC_URL+ `/images/goods/goods_map/${shopInfo}.jpg`}
                                    alt={`${shopLocation} 지도`}
                                />
                            }
                            {
                                category == 'attraction' && 
                                <img
                                    src={process.env.PUBLIC_URL + `${props.mapi}`}
                                    alt={`${shopLocation} 지도`}
                            />
                            }
                        </div>
                        <div className="map_content">
                            <div className="map_logo">
                                <img src={process.env.PUBLIC_URL +"/images/universal_logo.webp"} alt="유니버설로고" />
                            </div>
                            <div className="map_area">
                                <span>에어리어</span>
                                <span>뉴옥</span>
                                <span>파크맵</span>
                            </div>
                            <div className="park_info">
                                <span>파크정보</span>
                                <span>영업시간, 스케줄</span>
                                <span>쇼&어트랙션</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
