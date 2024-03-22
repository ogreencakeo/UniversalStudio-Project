import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import { TopArea } from "./TopArea";
import { MainArea } from "./MainArea";
import { FooterArea } from "./FooterArea";

import { useNavigate } from "react-router-dom";
import { universalCon } from "../contents/module/universalContext";
import { CartList } from "../contents/module/CartList";

// 제이쿼리
import $ from "jquery";

export function Layout() {
    // 로그인 상태 체크변수
    const [logSts, setLogSts] = useState(localStorage.getItem("universal-minfo"));
    // 로그인 환영 메시지 상태변수
    const [logMsg, setLogMsg] = useState(null);

    const logOut = useCallback(() => {
        if(window.confirm('로그아웃 하시겠습니까?')){
            localStorage.removeItem("universal-minfo");
            setLogSts(null);
            setLogMsg(null);
            alert("로그아웃 되었습니다!");
            chgPage("/", {});
        }
        
    }, []);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (localStorage.getItem("universal-minfo")) {
            const minfo = JSON.parse(localStorage.getItem("universal-minfo"));
            // 유저아이콘
            const usrIcon = ["🧡", "💜", "💚", "💙", "💛", "🤎"];
            // 컨텍스트 API에 공개된 로그인 메시지 업데이트하기!
            setLogMsg("Welcome " + minfo.unm + usrIcon[Math.floor(Math.random() * 5)]);
        } // if ///////////

    });

    const goNav = useNavigate();
    const chgPage = useCallback((pgName, param) => goNav(pgName, param), []);

    
    const flag = useRef(true);
    let stsVal = false;
    let transVal = null;

    if(localStorage.getItem('universal-cart')){
        transVal = JSON.parse(localStorage.getItem('universal-cart'));
        if(transVal.length !== 0) stsVal = true;
    }
    
    const [transData, setTransData] = useState(transVal); // 로컬스 변환값 변수
    const [csts, setCsts] = useState(stsVal);

    useEffect(()=>{
        if (csts === 1) {
            $(() => {
                $(".bgbx").show();
                $("#mycart").addClass("on");
            });
        } 
    }, []);

    return (
        <universalCon.Provider value={{ chgPage, logSts, setLogSts, setLogMsg, transData, setTransData, flag, setCsts }}>
            <TopArea chgPageFn={chgPage} logSts={logSts} logMsg={logMsg} logOut={logOut} />
            <MainArea />
            <FooterArea />
            {/* 카트리스트 */}
            {csts && <CartList selData={transData} flag={flag} />}
        </universalCon.Provider>
    );
}
