import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";

// 기본 데이터 제이슨 불러오기
import baseData from "../data/유니버설-문의2.json";

// 로컬스토리지 사용자정보
import { initData } from "../Function/mem_fn";

// 컨텍스트 API
import { universalCon } from "./module/universalContext";

// 제이쿼리
import $ from "jquery";

import "../css/board.css";
import "../css/board_file.css";
import { useContext } from "react";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";

// 기본 데이터 역순정렬
baseData.sort((a, b) => {
    return Number(a.idx) === Number(b.idx) ? 0 : Number(a.idx) > Number(b.idx) ? -1 : 1;
});

let orgData;
if (localStorage.getItem("universal-bdata")) orgData = JSON.parse(localStorage.getItem("universal-bdata"));
else orgData = baseData;

export function CustomerCenter2() {
    useLayoutEffect(()=>{
        window.scrollTo(0,0);
    }, []);

    if (!localStorage.getItem("universal-bdata")) {
        localStorage.setItem("universal-bdata", JSON.stringify(orgData));
    }
    initData();

    // 컨텍스트 API 사용하기
    const myCon = useContext(universalCon);

    const pgBlock = 7;
    const pgPgBlock = 4;
    const totNum = orgData.length;

    const [pgNum, setPgNum] = useState(1);
    const pgPgNum = useRef(1);

    // 게시판 모드관리변수
    const [bdMode, setBdMode] = useState("L");

    // 버튼공개 여부 관리변수 : 수정버튼
    const [btnSts, setBtnSts] = useState(false);

    // 강제 리랜더링 관리변수
    const [force, setForce] = useState(null);

    // 검색상태 관리변수 : 값유지만 하도록 참조변수로 생성
    const searchSts = useRef(false);

    // 최초 랜더링시 상태관리변수 : 처음 한번만 내림차순적용하기
    const firstSts = useRef(true);

    useEffect(() => {
        // 만약 로그아웃하면 버튼 상태값 false로 변경하 기!
        if (myCon.logSts === null) setBtnSts(false);
        // 만약 글쓰기모드(C)에서 로그아웃을 한 경우 리스트페이지이동
        if (myCon.logSts === null && bdMode === "C") setBdMode("L");
    }, [myCon.logSts]);

    //  기능 : 내림차순정렬
    function sortData(data, arr) {
        // 내림차순은 [-1,1]
        // 오름차순은 [1,-1] 을 보내준다!
        return data.sort((a, b) => {
            return Number(a.idx) === Number(b.idx) ? 0 : Number(a.idx) > Number(b.idx) ? arr[0] : arr[1];
        });
    }

    // 기능 : 데이터 초기화하기(전체데이터 업데이트)
    const rawData = () => {
        orgData = JSON.parse(localStorage.getItem("universal-bdata"), [-1, 1]);
    };

    // 최초랜더링 시에만 한번 실행하기
    // -> 경우에 따라 내림차순 필요한 경우 firstSts 값을 true로만 변경하면 리랜더링시
    // bindList() 위에서 먼저 적용된다. (글쓰기후 리스트 오기 / 검색직후에 적용함)
    if (firstSts.current) {
        // 내림차순 정렬 적용하기
        sortData(orgData, [-1, 1]);
        // 정력 선택박스 내림차순으로 변경하기
        $("#sel").val("0");
    } // if //////////

    // 기능 : 페이지별 리스트를 생성하여 바인딩함
    const bindList = () => {
        // 바인드시 최초상태 false로 업데이트!
        firstSts.current = false;

        const tempData = [];

        let initNum = (pgNum - 1) * pgBlock;
        let limitNum = pgBlock * pgNum;

        for (let i = initNum; i < limitNum; i++) {
            if (i >= totNum) break;
            tempData.push(orgData[i]);
        }

        if (orgData.length === 0) {
            return (
                <tr>
                    <td colSpan="5">There is no data.</td>
                </tr>
            );
        }

        return tempData.map((v, i) => (
            <div className="board-cont-wrap">
                <ul>
                    <li>{i + 1 + initNum}</li>
                    <li>
                        <a href="#" data-idx={v.idx} onClick={chgMode}>
                            {v.tit}
                        </a>
                    </li>
                    <li>{v.unm}</li>
                    <li>{v.date}</li>
                    <li>{v.cnt}</li>
                </ul>
            </div>
        ));
    };

    //  기능 : 리스트 페이징 링크를 생성한다!
    const pagingLink = () => {
        const blockCnt = Math.floor(totNum / pgBlock);
        const blockPad = totNum % pgBlock;

        const limit = blockCnt + (blockPad === 0 ? 0 : 1);

        const pgBlockCnt = Math.floor(limit / pgPgBlock);
        const pgBlockPad = limit % pgPgBlock;
        const pgLimit = pgBlockCnt + (pgBlockPad === 0 ? 0 : 1);
        console.log("페이징의 페이징 한계값 pgLimit :", pgLimit);

        let pgCode = [];

        let initNum = (pgPgNum.current - 1) * pgPgBlock;
        let limitNum = pgPgNum.current * pgPgBlock;

        for (let i = initNum; i < limitNum; i++) {
            if (i >= limit) break;

            {
                /*  페이징 링크 만들기 */
            }
            pgCode[i] = (
                <Fragment key={i}>
                    {pgNum - 1 === i ? (
                        <b>{i + 1}</b>
                    ) : (
                        <a href="#" onClick={chgList}>
                            {i + 1}
                        </a>
                    )}

                    {
                        // 매번 페이징의 페이징에서 끝번호 뒤 바 생략
                        // 또는 전체 한계값이 페이지 끝번호와 같으면 바 생략
                        i < limitNum - 1 || i >= limit + 1 ? " | " : ""
                    }
                    {console.log(limit, i)}
                </Fragment>
            );
        }

        {
            // 페이징 이전블록 이동 버튼 - 배열 맨앞에 추가
            // 기준 : 1페이지가 아니면 보임!
            pgCode.unshift(
                pgPgNum.current === 1 ? (
                    ""
                ) : (
                    <Fragment key={-1}>
                        <a 
                            href="#"
                            style={{ marginRight : '5px'}}
                            title="맨앞으로"
                            onClick={(e) => {
                                e.preventDefault();
                                goPaging(1, false)
                            }}>
                                ≪
                        </a>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                goPaging(-1, true);
                            }}
                            style={{ marginRight: "5px" }}
                            title="앞으로"
                        >
                            ◀
                        </a>
                    </Fragment>
                )
            );
        }
        {
            // 페이징 다음블록 이동 버튼
            // 기준 : 페이징의 페이징 블록 끝 번호가 아니면 보임
            pgCode.push(
                pgPgNum.current === pgLimit ? (
                    ""
                ) : (
                    <Fragment key={-2}>
                        <a
                            href="#"
                            style={{ marginLeft: "5px" }}
                            onClick={(e) => {
                                e.preventDefault();
                                goPaging(1, true);
                            }}
                        >
                            ▶
                        </a>
                        <a
                            href="#"
                            style={{ marginLeft: "5px" }}
                            title="맨뒤으로"
                            onClick={(e) => {
                                e.preventDefault();
                                goPaging(pgLimit, false);
                            }}
                        >
                            ≫
                        </a>
                    </Fragment>
                )
            );
        }

        return pgCode;
    };
    const goPaging = (dir, opt) => {
        // dir 이동방향 오른쪽 1, 왼쪽 -1
        let newPgPgNum;

        if(opt) newPgPgNum = pgPgNum.current + dir;
        else newPgPgNum = dir; 

        let newPgNum = (newPgPgNum - 1) * pgPgBlock + 1;

        // 페이징의 페이징번호 업데이트
        pgPgNum.current = newPgPgNum;
        // 이동할 페이지 번호 : 다음 블록의 첫 페이지로 이동
        setPgNum(newPgNum); // 리랜더링
    };

    //  기능 : 페이지 링크 클릭시 리스트변경
    const chgList = (e) => {
        e.preventDefault();
        let currNum = e.target.innerText;
        setPgNum(currNum);
    };

    // 선택된 데이터 셋팅을 위한 참조변수
    const cData = useRef(null);

    // 로그인 사용자 데이터 셋팅을 위한 참조변수
    const logData = useRef(null);

    //  기능 : 게시판 옵션 모드를 변경함
    const chgMode = (e) => {
        // 기본막기
        e.preventDefault();

        // 만약 검색상태였다면 searchSts값이 treu이므로
        // 이때 false로 업데이트와 함께 orgData도 초기화해준다!
        if (searchSts.current) {
            // searchSts값 true 업데이트
            searchSts.current = false;
            // orgData초기화
            rawData();
        }

        let btxt = $(e.target).text();
        let modeTxt;

        switch (btxt) {
            case "목록":
                modeTxt = "L";
                break;
            case "글쓰기":
                modeTxt = "C";
                break;
            case "수정":
                modeTxt = "U";
                break;
            case "입력":
                modeTxt = "S";
                break;
            case "삭제":
                modeTxt = "D";
                break;
            default:
                modeTxt = "R";
        }

        if (modeTxt === "R") {
            let cidx = $(e.target).attr("data-idx");

            cData.current = orgData.find((v) => {
                if (Number(v.idx) === Number(cidx)) return true;
            });

            compUsr(cData.current.uid);

            setBdMode("R");

            plusCnt();
        }

        // 리스트 이동하기
        else if (modeTxt === "L") {
            setBdMode("L");
        }

        // 쓰기 모드
        else if (modeTxt === "C") {
            // 로그인한 사용자 정보 셋팅하기 : 글쓰기버튼
            logData.current = JSON.parse(myCon.logSts);
            console.log("logData.current :", logData.current);
            // 이 데이터로 가상돔 구성시 리액트코드에 데이터매칭함!
            // 필요데이터: 로그인 사용자이름(unm), 이메일(eml)

            setBdMode("C");
        }

        // 3-4. 글쓰기 서브밋 /////////
        else if (modeTxt === "S" && bdMode === "C") {
            const subEle = $(".writeone .subject");
            const contEle = $(".writeone .content");

            if (subEle.val().trim() === "" || contEle.val().trim() === "") {
                window.alert("제목과 내용은 필수입력입니다!");
            }
            // 통과시 실제 데이터 입력하기
            else {
                const addZero = (x) => (x < 10 ? "0" + x : x);
                // 1. 날짜 데이터 구성
                let today = new Date();
                let yy = today.getFullYear();
                let mm = today.getMonth() + 1;
                let dd = today.getDate();

                // 2. 원본 데이터 변수할당
                let orgTemp = orgData;

                // 입력idx 기본키값을 숫자값 중 최대값에 1을 더함!
                let arrIdx = orgTemp.map((v) => parseInt(v.idx));
                // 최대값
                let maxNum = Math.max(...arrIdx);

                // 임시변수에 입력할 객체 데이터 생성하기
                let temp = {
                    idx: maxNum + 1,
                    tit: subEle.val().trim(),
                    cont: contEle.val().trim(),
                    att: "",
                    date: `${yy}-${addZero(mm)}-${addZero(dd)}`,
                    uid: logData.current.uid,
                    unm: logData.current.unm,
                    cnt: "0",
                };

                // 원본임시변수에 배열데이터 값 push하기
                orgTemp.push(temp);
                localStorage.setItem("universal-bdata", JSON.stringify(orgTemp));

                // 내림차순 정렬하도록 firstSts 값을 true로 변경하면
                // 리랜더링시 정렬 적용될까? bindList 전에 적용되야 함
                firstSts.current = true; // -> 효과 있음!

                setBdMode("L");
            }
        } else if (modeTxt === "U") {
            setBdMode("U");
        } else if (modeTxt === "S" && bdMode === "U") {
            const subEle = $(".updateone .subject");
            const contEle = $(".updateone .content");

            if (subEle.val().trim() === "" || contEle.val().trim() === "") {
                window.alert("제목과 내용은 필수입력입니다!");
            } else {
                // 원본 데이터 변수할당
                let orgTemp = orgData;

                orgTemp.some((v) => {
                    if (Number(cData.current.idx) === Number(v.idx)) {
                        // 제목과 내용 업데이트하기
                        v.tit = subEle.val().trim();
                        v.cont = contEle.val().trim();

                        return true;
                    }
                });
                localStorage.setItem("universal-bdata", JSON.stringify(orgTemp));

                setBdMode("L");
            }
        }

        // 삭제하기
        else if (modeTxt === "D" && bdMode === "U") {
            if (window.confirm("정말로 글을 삭제하시겠습니까?")) {
                //  데이터 순회하다가 해당데이터 이면
                // 순번으로 splice(순번,1)사용 삭제
                orgData.some((v, i) => {
                    if (Number(cData.current.idx) === Number(v.idx)) {
                        orgData.splice(i, 1);
                        return true;
                    }
                });

                localStorage.setItem("universal-bdata", JSON.stringify(orgData));

                setBdMode("L");
            }
        }
    };

    // 원본으로 부터 해당 사용자 정보 조회하여
    // 글쓴이와 로그인사용자가 같으면 btnSts값을 true로 업데이트
    const compUsr = (usr) => {
        if (myCon.logSts !== null) {
            // 로컬스 원본 데이터 조회
            const info = JSON.parse(localStorage.getItem("universal-mem-data"));

            // 원본으로 부터 해당 사용자 정보 조회하여
            // 글쓴이와 로그인사용자가 같으면 btnSts값을 true로 업데이트
            const cUser = info.find((v) => {
                if (v.uid === usr) return true;
            });

            // 로그인사용자 정보와 조회하기
            // 아이디로 조회함!
            if (cUser) {
                const currUsr = JSON.parse(myCon.logSts);
                if (currUsr.uid === cUser.uid) setBtnSts(true);
                else setBtnSts(false);
            } else {
                setBtnSts(false);
            }
        } else {
            // 로그인 안한 상태 ////
            setBtnSts(false);
        }
    };

    // 게시판 조회수 증가 반영하기
    const plusCnt = () => {
        // 처음에 통과상태 설정하기
        let isOK = true;
        // 세션스에 등록된글 or 로그인사용자 글 일때 false처리!

        let cidx = cData.current.idx;

        if (!sessionStorage.getItem("cnt-idx")) sessionStorage.setItem("cnt-idx", "[]");

        let cntIdx = JSON.parse(sessionStorage.getItem("cnt-idx"));

        // 세션스에 등록된 글번호만큼 돌다가 같은 글이면
        // isOK값을 false로 처리함!
        cntIdx.some((v) => {
            if (Number(v) === Number(cidx)) {
                isOK = false;

                return true;
            }
        });

        // 로그인한 사용자일 경우 로그인 사용자계정과 같은
        // 글이면 증가하지 않는다!
        if (localStorage.getItem("universal-minfo")) {
            let minfo = JSON.parse(localStorage.getItem("universal-minfo"));
            let cUid = minfo.uid;

            // 로그인 아이디 === 현재글 아이디 검사통과시
            // isOK 값 false처리로 조회수 증가막기!
            if (cUid === cData.current.uid) isOK = false;
        }

        // 카운트 증가하기
        if (isOK) {
            let data = JSON.parse(localStorage.getItem("universal-bdata"));
            data.some((v) => {
                if (Number(v.idx) === Number(cidx)) {
                    // 기존 cnt항목의 숫자를 1증가하여 업데이트!
                    v.cnt = Number(v.cnt) + 1;
                    return true;
                }
            });

            // 원본 데이터에 반영하기 : 꼭해야만 리스트가 업데이트됨!
            orgData = data;
            localStorage.setItem("universal-bdata", JSON.stringify(data));
        } //////////// if /////////////

        // 5.현재글 세션스에 처리하기
        if (isOK) {
            // 조회수 증가일 경우에만 글번호 세션스 등록!
            // 세션스 배열에 idx값 넣기
            cntIdx.push(Number(cidx));

            sessionStorage.setItem("cnt-idx", JSON.stringify(cntIdx));
        }
    };

    // 검색기능수행 함수 ////////////////////
    const searchList = () => {
        const cta = $("#cta").val();
        const inpVal = $("#stxt").val().toLowerCase().trim();

        if (inpVal === "") {
            alert("Write down keyword!!!");
            return;
        }

        // 검색실행시 검색상태값 업데이트 true
        searchSts.current = true; // List버튼 보이기!

        const storageData = JSON.parse(localStorage.getItem("universal-bdata"));

        const resData = storageData.filter((v) => {
            let compTxt = v[cta].toLowerCase();
            if (compTxt.indexOf(inpVal) !== -1) return true;
        });

        // 5. 리스트 업데이트 하기
        orgData = resData;

        // 내림차순 정렬하도록 firstSts 값을 true로 변경하면
        // 리랜더링시 정렬 적용될까? bindList 전에 적용되야 함
        firstSts.current = true; // -> 효과 있음!

        // 다른 페이지에서 검색하면 1페이지로 변경(이때 리랜더링됨!)
        if (pgNum === 1) setForce(Math.random());
        else setPgNum(1);
    }; ///

    // 검색을 실행하고 다른페이지로 이동할 경우
    // 데이터가 검색된 것으로 남아있으므로
    // 이때 소멸자로 원본 데이터 초기화 셋팅 함수를
    // 호출해준다!!
    useEffect(() => {
        return () => {
            rawData();
        };
    }, []);

    // 리턴코드 ////////////////////
    return (
        <>
            {bdMode === "L" && (
                <div className="board-wrap">
                    <h1 className="tit">QUESTION</h1>
                    {/* 검색옵션 박스 */}
                    <div className="selbx">
                        <select className="cta" id="cta">
                            <option value="tit">제목</option>
                            <option value="cont">내용</option>
                            <option value="unm">글쓴이</option>
                        </select>
                        <select
                            className="sel"
                            id="sel"
                            onChange={(e) => {
                                let opt = $(e.currentTarget).val();
                                if (Number(opt) === 0) sortData(orgData, [-1, 1]);
                                else sortData(orgData, [1, -1]);
                                console.log(orgData);
                                setForce(Math.random());
                            }}
                        >
                            <option value="0">Z-A</option>
                            <option value="1">A-Z</option>
                        </select>
                        <input
                            type="text"
                            id="stxt"
                            maxLength="50"
                            onKeyUp={(e) => {
                                if (e.code === "Enter") searchList();
                            }}
                        />
                        <button className="sbtn" onClick={searchList}>
                            검색
                        </button>
                    </div>
                    {/* 리스트 테이블 박스 */}
                    <div className="dtbl" id="board">
                        <ul>
                            <li>번호</li>
                            <li>제목</li>
                            <li>닉네임</li>
                            <li>날짜</li>
                            <li>조회수</li>
                        </ul>
                    </div>
                    {/* 중앙 레코드 표시부분 */}
                    <div>{bindList()}</div>
                    {/* 하단 : 페이징 */}
                    <div className="center-paging-link">{pagingLink()}</div>
                </div>
            )}
            {/* 글쓰기 C모드 */}
            {bdMode === "C" && (
                <div className="dtblview writeone">
                    <h1>글쓰기</h1>
                    <div>
                        <ul>
                            <li>닉네임</li>
                            <li>
                                <input type="text" className="name" size="20" readOnly value={logData.current.unm} />
                            </li>
                        </ul>
                        <ul>
                            <li>이메일</li>
                            <li>
                                <input type="text" className="email" size="40" readOnly value={logData.current.eml} />
                            </li>
                        </ul>
                        <ul>
                            <li>제목</li>
                            <li>
                                <input type="text" className="subject" size="60" />
                            </li>
                        </ul>
                        <ul>
                            <li>내용</li>
                            <li>
                                <textarea className="content" cols="60" rows="10"></textarea>
                            </li>
                        </ul>
                        <ul>
                            <li>첨부파일</li>
                            {/* <li>
                                <AttachBox />
                            </li> */}
                        </ul>
                    </div>
                </div>
            )}
            {/* 읽기 R모드 */}
            {bdMode === "R" && (
                <div className="dtblview readone">
                    <h1>게시판 </h1>
                    <div>
                        <ul>
                            <li>닉네임</li>
                            <li>
                                <input type="text" className="name" size="20" readOnly value={cData.current.unm} />
                            </li>
                        </ul>
                        <ul>
                            <li>제목</li>
                            <li>
                                <input type="text" className="subject" size="60" readOnly value={cData.current.tit} />
                            </li>
                        </ul>
                        <ul>
                            <li>내용</li>
                            <li>
                                <div>
                                    {cData.current.cont}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            {bdMode === "U" && (
                <div className="dtblview updateone">
                    <h1>수정하기</h1>
                    <div>
                        <ul>
                            <li>닉네임</li>
                            <li>
                                <input type="text" className="name" size="20" readOnly value={cData.current.unm} />
                            </li>
                        </ul>
                        <ul>
                            <li>제목</li>
                            <li>
                                <input type="text" className="subject" size="60" defaultValue={cData.current.tit} />
                            </li>
                        </ul>
                        <ul>
                            <li>내용</li>
                            <li>
                                <textarea
                                    className="content"
                                    cols="60"
                                    rows="10"
                                    defaultValue={cData.current.cont}
                                ></textarea>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {/* 버튼 그룹박스 */}
            <div className="dbtl btngrp">
                <div>
                    <ul>
                        {
                            // L모드 (리스트)
                            // 검색상태관리 참조변수 searchSts값이 true일때만 출력!
                            bdMode === "L" && searchSts.current && (
                                <button
                                    onClick={() => {
                                        rawData();
                                        setForce(Math.random());
                                        $("#stxt").val("");
                                        $("#cta").val("tit");
                                    }}
                                >
                                    <a href="#">목록</a>
                                </button>
                            )
                        }
                        {
                            // L모드 (리스트)
                            bdMode === "L" && myCon.logSts != null && (
                                <>
                                    {/* <button onClick={chgMode}>
                                        <a href="#">목록</a>
                                    </button> */}
                                    <button onClick={chgMode}>
                                        <a href="#">글쓰기</a>
                                    </button>
                                </>
                            )
                        }
                        {
                            // C모드 (글쓰기)
                            bdMode === "C" && (
                                <>
                                    <button onClick={chgMode}>
                                        <a href="#">입력</a>
                                    </button>
                                    <button onClick={chgMode}>
                                        <a href="#">목록</a>
                                    </button>
                                </>
                            )
                        }
                        {
                            // R모드 (읽기모드)
                            bdMode === "R" && (
                                <>
                                    <button onClick={chgMode}>
                                        <a href="#">목록</a>
                                    </button>
                                    {
                                        // 로그인 상태일때 수정가능
                                        btnSts && (
                                            <button onClick={chgMode}>
                                                <a href="#">수정</a>
                                            </button>
                                        )
                                    }
                                </>
                            )
                        }
                        {
                            // 수정모드(U)
                            bdMode === "U" && (
                                <>
                                    <button onClick={chgMode}>
                                        <a href="#">입력</a>
                                    </button>
                                    <button onClick={chgMode}>
                                        <a href="#">삭제</a>
                                    </button>
                                    <button onClick={chgMode}>
                                        <a href="#">목록</a>
                                    </button>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    );
} 
