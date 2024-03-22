import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// 제이쿼리
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

import { navMenu } from "../data/navMenu";
import { Logo } from "../contents/module/Logo";

// import '../css/nav.css';

// 폰트어썸
// 폰트어썸 불러오기
import { faSearch, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const TopArea = memo(({ chgPageFn, logSts, logMsg, logOut }) => {
    // enterKey
    const enterKey = (e) => {
        if (e.key === "Enter" || e.keyCode === 13 || e.code === "Enter") {
            console.log("e.target :", e.target);
            let txt = $(e.target).val().trim();
            console.log("enterKey txt :", txt);
            if (txt !== "") {
                $(e.target).val("").parent().hide();
                console.log("go");
                goSerach(txt);
            }
        }
    };
    const goPage = (e) => {
        console.log("goPage");
        const tg = $(e.currentTarget).siblings("#schinGnb");
        console.log("tg", tg);
        let tgTxt = tg.val().trim();
        if (tgTxt !== "") {
            $(tg).val("").parent().hide();
            goSerach(tgTxt);
        }
    };
    // showSerach
    const showSerach = (e) => {
        e.preventDefault();
        $(".searchingGnb").show();
        $("#schinGnb").focus();
        let txt = $("#schinGnb").val().trim();
        console.log(txt);
    };

    const goSerach = (txt) => {
        $(".top-show-nav").slideUp().removeClass("on");
        chgPageFn("/schpage", { state: { keyword: txt } });
    };

    const showMenu = () => {
        $(".top-show-nav").slideToggle().toggleClass("on");
    };

    useEffect(() => {
        $(".gnb2 a[href!='#']").on("click", () => {
            $(".top-show-nav").slideUp().removeClass("on");
        });
    }); // useEffect


    // 모바일 버튼
    const [subMenuStates, setSubMenuStates] = useState({});
    const toggleSubMenu = (index) => {
        setSubMenuStates((prevStates) => ({
            ...prevStates,
            [index]: !prevStates[index]
        }));

    };


    // top-area 숨기고 사라지기 반복
    useEffect(() => {
        const topArea = document.querySelector(".top-area");

        if (topArea) {
            let lastScrollTop = 0;

            const handelScroll = () => {
                const scrollTop = window.scrollY || window.pageYOffset;
                const windowWidth = window.innerWidth;

                // windowWidth가 1033px 이상이고, 스크롤을 아래로 내릴 때 hide 클래스 추가
                if (windowWidth >= 1033 && scrollTop > lastScrollTop) {
                    topArea.classList.add("hide");
                } else {
                    // 위로 스크롤할 때 또는 화면 너비가 920px 미만일 때 hide 클래스 제거
                    topArea.classList.remove("hide");
                }
                lastScrollTop = scrollTop;
            };

            window.addEventListener("scroll", handelScroll);
            return () => {
                window.removeEventListener("scroll", handelScroll);
            };
        }
    }, []);

    useEffect(()=>{
        const topMark = document.querySelector('.top-mark');
        const clickFn = () => {
            window.scroll(0, 0);
        };
        topMark.addEventListener('click', clickFn);

        return()=>topMark.removeEventListener('click', clickFn);
    }, []);

    useEffect(() => {
        const topMark = document.querySelector('.top-mark');

        const handleScroll = () => {
            const winDirec = window.scrollY || window.pageYOffset;
            if (winDirec > 3000) {
                topMark.style.display = 'block';
            } else {
                topMark.style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);
        // topMark.addEventListener('click', clickFn);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            // topMark.removeEventListener('click', clickFn);
        }
    }, []);
    return (
        <>
            <header className="top-area">
                <div className="logmsg">{logMsg}</div>
                <nav className="gnb">
                    <ul>
                        <li>
                            <Logo />
                        </li>

                        {navMenu.map((v, i) => (
                            <li key={i}>
                                {v.sub ? (
                                    <a href="#" onClick={(e) => e.preventDefault()}>
                                        {v.txt}
                                    </a>
                                ) : (
                                    <Link to={v.link}>{v.txt}</Link>
                                )}
                                {v.sub && (
                                    <div className="smenu">
                                        <ol>
                                            {v.sub.map((v, i) => (
                                                <li key={i}>
                                                    <Link to={v.link}>{v.txt}</Link>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                )}
                            </li>
                        ))}
                        <li style={{ marginLeft: "auto" }}>
                            <div className="searchingGnb">
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    className="schbtnGnb"
                                    title="Open Search"
                                    onClick={goPage}
                                />
                                <input type="text" style={{ display: "none" }} />
                                <input id="schinGnb" type="text" placeholder="어트랙션 검색" onKeyUp={enterKey} />
                            </div>
                            <a href="#" onClick={showSerach}>
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                        </li>
                        {logSts === null && (
                            <>
                                <li>
                                    <Link to="/member">회원가입</Link>
                                </li>
                                <li>
                                    <Link to="/login">로그인</Link>
                                </li>
                            </>
                        )}
                        {logSts !== null && (
                            <>
                                <li>
                                    <a href="#" onClick={logOut}>
                                        LOGOUT
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>
                    <button className="hambtn" onClick={showMenu}></button>
                </nav>
            </header>
            <div className="top-show-nav">
                <nav className="gnb2">
                    <ul>
                        <li style={{ marginLeft: "auto" }}>
                            <div className="searchingGnb">
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    className="schbtnGnb"
                                    title="Open Search"
                                    onClick={goPage}
                                />
                                <input type="text" style={{ display: "none" }} />
                                <input id="schinGnb" type="text" placeholder="어트랙션 검색" onKeyUp={enterKey} />
                            </div>
                            <a href="#" onClick={showSerach}>
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                        </li>
                        {navMenu.map((v, i) => (
                            <li key={i}>
                                {v.sub ? (
                                    <a className="smenu_toggle" href="#" onClick={() => toggleSubMenu(i)}>
                                        {v.txt}
                                        <span className="arrow-icon">{subMenuStates[i] ? '-' : '+'}</span>
                                    </a>
                                ) : (
                                    <Link to={v.link}>{v.txt}</Link>
                                )}

                                {v.sub && (
                                    <div className={subMenuStates[i] ? "smenu2 on" : "smenu2"}>
                                        <ol>
                                            {v.sub.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link to={subItem.link}>{subItem.txt}</Link>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                )}
                            </li>
                        ))}
                        <div className="member-join">
                            {logSts === null && (
                                <>
                                    <li>
                                        <Link to="/member">회원가입</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">로그인</Link>
                                    </li>
                                </>
                            )}
                            {logSts !== null && (
                                <>
                                    <li>
                                        <a href="#" onClick={logOut}>
                                            LOGOUT
                                        </a>
                                    </li>
                                </>
                            )}
                        </div>
                    </ul>
                </nav>
            </div>
            <div className="top-mark">
                    <h3>
                        <FontAwesomeIcon icon={faCaretUp} /><br/>
                        TOP
                    </h3>
            </div>
        </>
    );
});
