import { useEffect, useState } from "react";
import "../css/customerCenter.css";

import { announcement } from "../data/유니버설-문의";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";

export function CustomerCenter() {
    const [customBtn, setCustomBtn] = useState("notice_announcement");
    const [selData, setSelData] = useState(announcement[customBtn]);

    const [customerColor, setCustomerColor] = useState("notice_announcement");
    const customerCenterFn = (data) => {
        setCustomBtn(data);
        setCustomerColor(data);
        // setIsOn(false);
    };

    useEffect(() => {
        const selectedData = announcement[customBtn];
        setSelData(selectedData);
    }, [customBtn]);

    const cusmenu = document.querySelector(".cust-smenu-cont");

    // const viewCusCont = () => {
    //     cusmenu.classList.toggle('on');
    // }

    // 토글 버튼
    const togglebox = document.querySelectorAll(".togglebox");
    const [isOn, setIsOn] = useState(Array(togglebox.length).fill(false));
    console.log("togglebox", togglebox.length);
    console.log(isOn);

    const viewCusCont = (index) => {
        setIsOn((prev) => {
            const newToggleList = JSON.parse(JSON.stringify(prev));
            newToggleList[index] = !newToggleList[index];
            return newToggleList;
        });
    };
    
    useEffect(()=>{

    }, [isOn]);

    // 게시판
    const makeCode = (data) => {
        const split_data = data.split("^");
        console.log("split_data :", split_data);
        const temp = [];
        for (let i = 0; i < split_data.length; i++) {
            temp[i] = <p className="split_data">{split_data[i]}</p>;
        }
        return temp;
    };

    return (
        <>
            <div className="customerCenter-wrap">
                <div className="customerCenter-left-wrap">
                    <h1>고객센터</h1>
                    {/* 옵션 버튼 박스 */}
                    <div className="customer-option-bx">
                        <button
                            className={customerColor === "notice_announcement" ? "customerColorOn" : ""}
                            onClick={() => customerCenterFn("notice_announcement")}
                            key={0}
                        >
                            <span>공지사항</span>
                            {/* <span><FontAwesomeIcon icon={faCircleRight} /></span> */}
                            <span>
                                <FontAwesomeIcon icon={faCaretRight} />
                            </span>
                        </button>
                        <button
                            className={customerColor === "frequently_asked" ? "customerColorOn" : ""}
                            onClick={() => customerCenterFn("frequently_asked")}
                            key={1}
                        >
                            <span>자주하는 질문</span>
                            <span>
                                <FontAwesomeIcon icon={faCaretRight} />
                            </span>
                        </button>
                    </div>
                </div>
                {/* 옵션 선택시 결과 박스 */}
                <div className="customerCenter-right-wrap">
                    <h2>
                        {customBtn === "notice_announcement" && "공지사항"}
                        {customBtn === "frequently_asked" && "자주묻는 질문"}
                    </h2>
                    <div className="customerCenter-bx">
                        <div className="customerCenter-header">
                            <div>번호</div>
                            <div>제목</div>
                            {customBtn === "notice_announcement" && (
                                <>
                                    <div>작성자</div>
                                    <div>작성일</div>
                                </>
                            )}
                        </div>
                        {selData.map(
                            (v, i) =>
                                v.writer != "" && (
                                    <div className="togglebox" onClick={() => viewCusCont(i)} key={i}>
                                        <ul className="customerCenter-smenu">
                                            <li>{v.idx}</li>
                                            <li className={`tit-color-change ${isOn[i] ? "on" : ""}`}>{v.tit}</li>
                                            <li>{v.writer}</li>
                                            <li>{v.date}</li>
                                        </ul>
                                        <div className={`cust-smenu-cont ${isOn[i] ? "on" : ""}`}>
                                            <h2><strong><FontAwesomeIcon icon={faCircleDown} /></strong></h2>
                                            <h3>{v.tit}</h3>
                                            {v.cont.indexOf("^") == -1 ? v.cont : makeCode(v.cont)}
                                        </div>
                                    </div>
                                )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
