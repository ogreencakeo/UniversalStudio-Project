import $ from "jquery";
import { useEffect, useState } from "react";
import "../../css/attraction.css";
import { AttractionCont } from "./AttractionCont";
import { attractionData } from "../../data/attraction/attractionData";

export function Seaching2(props) {
    const [kword, setKword] = useState(null);
    const [selData, setSelData] = useState([[], 2]);
    const [cnt, setCnt] = useState(0);
    const [sortOrder, setSortOrder] = useState("asc"); // "asc" 또는 "desc"

    const chgKword = (txt) => setKword(txt);

    

    useEffect(() => {
        chgKword(props.kword);
        setSortOrder("asc"); // 검색이 아닌 경우에는 초기값으로 설정
    }, [props.kword]);

    useEffect(() => {
        schList();
    }, [kword]);

    // 검색리스트 만들기 함수
    function schList() {
        const keyword = kword || "";
        const newList = attractionData.filter((v) => v.name.includes(keyword));
        sortList("asc", newList); // 검색 시에는 항상 오름차순으로 정렬
        setCnt(newList.length);
    }

    const sortList = (order, list) => {
        const temp = [...list];
        temp.sort((a, b) => {
            return order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        });
    
        console.log("Sorted List:", temp); // 확인을 위한 로그 추가
    
        setSelData([temp, order]);
        setSortOrder(order); // 정렬 후 현재 정렬 상태로 설정
    };

    return (
        <>
            <div className="attraction-wrap">
                <div className="attraction-cont-listbx">
                    <h1 className="tit">검색 결과</h1>
                    <h2 className="listbx">어트랙션 검색결과가 ({cnt})개 나왔습니다.</h2>
                    <div className="sortbx">
                        <select
                            name="sel"
                            id="sel"
                            className="sel"
                            value={sortOrder}
                            onChange={(e) => sortList(e.target.value, selData[0])}
                        >
                            <option value="asc">A-Z</option>
                            <option value="desc">Z-A</option>
                        </select>
                    </div>
                    <AttractionCont dt={selData[0]} total={cnt} />
                </div>
            </div>
        </>
    );
}
