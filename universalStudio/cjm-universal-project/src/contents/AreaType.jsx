import { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { attractionData } from "../data/attraction/attractionData";

// css
import "../css/area_type.css";

import { Link, useLocation } from "react-router-dom";
import { GoodsSwiper } from "./pages/plugin/Swiper";
import { UniverSalText } from "./module/UniverSalText";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCirclePlus,
    faDiceTwo,
    faHatWizard,
    faParachuteBox,
    faDemocrat,
    faTree,
} from "@fortawesome/free-solid-svg-icons";


export function AreaType() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
    });

    const loc = useLocation();
    let keyword;

    if (loc.state) keyword = loc.state.keyword;

    const [selectedCat, setSelectedCat] = useState(["nintendo", "harrypotter", "minion", "wonderland", "jurassicpark"]);
    // 더보기버튼
    const [displayCount, setDisplayCount] = useState(8);
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        // filterData를 selectedCat에 따라 업데이트
        const updatedFilterData = attractionData.filter((v) => selectedCat.includes(v.areatype));
        setFilterData(updatedFilterData);
        
        // displayCount를 초기화
        setDisplayCount(8);
    }, [selectedCat, attractionData]);

    const changeList = (e) => {
        const cid = e.target.id;
        const isChecked = e.target.checked;

        setSelectedCat((v) => {
            if (isChecked) {
                return [...v, cid];
            } else {
                return v.filter((v) => v !== cid);
            }
        });
    };

    const makeList = () => {
        const filterData = attractionData.filter((v) => selectedCat.includes(v.areatype));

        return filterData.slice(0, displayCount).map((v, i) => (
            <div className="area-type-bx" key={i}>
                <Link
                    to="/detail"
                    state={{
                        name: v.name,
                        img: v.img,
                        map: v.map,
                        title: v.title,
                        desc: v.desc,
                        logo: v.logo,
                    }}
                >
                    <div className="area-type-img" title={v.name}>
                        <img src={process.env.PUBLIC_URL + `${v.img}`} alt={v.name} />
                        <h2>
                            <FontAwesomeIcon icon={faCirclePlus} />
                        </h2>
                    </div>
                </Link>
                <div className="area-type-cont">
                    <h3>
                        {v.icon} &nbsp;{v.areatype}
                    </h3>
                    <h2>{v.name}</h2>
                </div>
            </div>
        ));
    };

    // 더보기 버튼
    const handleLoadMore = () => {
        setDisplayCount((v) => v+8); 
    };

    return (
        <>
            <GoodsSwiper cats="area" />
            <div className="area-type-btn-wrap">
                <div className="area-type-btn">
                    <nav>
                        <ul>
                            <li>
                                <label htmlFor="nintendo">
                                    <FontAwesomeIcon icon={faDiceTwo} /> 닌텐도 월드
                                </label>
                                &nbsp;
                                <input
                                    type="checkbox"
                                    className="chkbx"
                                    id="nintendo"
                                    defaultChecked={selectedCat.includes("nintendo")}
                                    onChange={changeList}
                                />
                            </li>
                            <li>
                                <label htmlFor="harrypotter">
                                    <FontAwesomeIcon icon={faHatWizard} /> 해리포터
                                </label>
                                &nbsp;
                                <input
                                    type="checkbox"
                                    className="chkbx"
                                    id="harrypotter"
                                    defaultChecked={selectedCat.includes("harrypotter")}
                                    onChange={changeList}
                                />
                            </li>
                            <li>
                                <label htmlFor="minion">
                                    <FontAwesomeIcon icon={faParachuteBox} /> 미니언파크
                                </label>
                                &nbsp;
                                <input
                                    type="checkbox"
                                    className="chkbx"
                                    id="minion"
                                    defaultChecked={selectedCat.includes("minion")}
                                    onChange={changeList}
                                />
                            </li>
                            <li>
                                <label htmlFor="wonderland">
                                    <FontAwesomeIcon icon={faDemocrat} /> 원더랜드
                                </label>
                                &nbsp;
                                <input
                                    type="checkbox"
                                    className="chkbx"
                                    id="wonderland"
                                    defaultChecked={selectedCat.includes("wonderland")}
                                    onChange={changeList}
                                />
                            </li>
                            <li>
                                <label htmlFor="jurassicpark">
                                    <FontAwesomeIcon icon={faTree} /> 쥬라기공원
                                </label>
                                &nbsp;
                                <input
                                    type="checkbox"
                                    className="chkbx"
                                    id="jurassicpark"
                                    defaultChecked={selectedCat.includes("jurassicpark")}
                                    onChange={changeList}
                                />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="area-type-wrap">{makeList()}</div>
            {/* 더보기 버튼 */}
            {
                // displayCount < attractionData.length && (
                //     <button className="areaType-more-btn" onClick={handleLoadMore}>
                //         더보기
                //     </button>)
                    displayCount < filterData.length ? (
                        <button className="areaType-more-btn" onClick={handleLoadMore}>
                            더보기
                        </button>
                    ) : null
            }
            <UniverSalText />
        </>
    );
}
