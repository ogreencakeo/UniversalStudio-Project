import { Link } from "react-router-dom";
// CSS
import "../../css/attractionCont.css";
// 데이터
// import {attractionData} from '../../data/attraction/attractionData';

export function AttractionCont({ dt, total }) {
    const selData = dt;
    const selCnt = total;
    return (
        <>
            <div className="attractionCont-list-wrap">
                {/* 데이터 개수가 0이 아닐때 */}
                {selCnt != 0 && (
                    <>
                        {selData.map((v, i) => (
                            <Link
                                to="/detail"
                                state={{
                                    name: v.name,
                                    logo: v.logo,
                                    img: v.img,
                                    map: v.map,
                                    title: v.title,
                                    desc: v.desc,
                                }}
                                key={i}
                            >
                                <div className="attractionCont-list-bx" >
                                    <div className="attractionCont-list-img">
                                        <img src= {process.env.PUBLIC_URL+ `${v.img}`} alt={v.name} />
                                    </div>
                                    <h2>{v.name}</h2>
                                </div>
                            </Link>
                        ))}
                    </>
                )}
                {selCnt == 0 && <h2 style={{ textAlign: "center" }}></h2>}
            </div>
        </>
    );
}
