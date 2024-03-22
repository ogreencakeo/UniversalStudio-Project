import { Link } from "react-router-dom";
import "../css/login.css";
import { Seaching2 } from "./module/Seaching2";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { initData } from "../Function/mem_fn";
import { universalCon } from "./module/universalContext";
export function Login() {
    useLayoutEffect(()=>{
        window.scrollTo(0,0);
    }, []);

    // 컨텍스트 API 사용
    const myCon = useContext(universalCon);

    const [userId, setUserId] = useState("");
    const [pwd, setPwd] = useState("");

    const [userIdError, setUserIdError] = useState(false);
    const [pwdError, setPwdError] = useState(false);

    const msgId = ["반드시 입력하셔야 합니다.", "아이디가 존재하지 않습니다."];

    const msgPwd = ["반드시 입력하셔야 합니다.", "비밀번호가 일치하지 않습니다."];

    const [idMsg, setIdMsg] = useState(msgId[0]);
    const [pwdMsg, setPwdMsg] = useState(msgPwd[0]);

    // 아이디 유효성 검사
    const changeUserId = (e) => {
        if(e.target.value !== '') setUserIdError(false);
        else{
            setIdMsg(idMsg[0]);
            setUserIdError(true);
        }
        setUserId(e.target.value);
    };

    const changePwd = (e) => {
        if(e.target.value !== '') setPwdError(false);
        else{
            setPwdMsg(msgPwd[0]);
            setPwdError(true);
        }
        setPwd(e.target.value);
    };

    const totalValid = () => {
        if(!userId) setUserIdError(true);
        if(!pwd) setPwdError(true);

        if(userId && pwd) return true;
        else return false;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(totalValid()){
            initData();
            let memData = localStorage.getItem('universal-mem-data');
            memData = JSON.parse(memData);

            let findData = memData.find((v) => {
                if(v['uid'] === userId) return true;
            });

            if(findData){
                setUserIdError(false);
                if(findData['pwd'] === pwd){
                    setPwdError(false);
                    localStorage.setItem('universal-minfo', JSON.stringify(findData));

                    myCon.setLogSts(localStorage.getItem('universal-minfo'));

                    myCon.chgPage('/', {});
                }else{
                    setPwdMsg(msgPwd[1]);
                    setPwdError(true);
                }
            }else{
                setIdMsg(msgId[1]);
                setUserIdError(true);
            }
        }
    };

    return (
        <div className="login-page-wrap">
            <div className="login-bx">
                <h1>로그인</h1>
                <form method="post" action="process.php">
                    <ul>
                        <li>
                            <input type="text" maxLength="20" placeholder="아이디를 입력해주세요" value={userId} onChange={changeUserId} />
                            {
                                userIdError && (
                                    <div className="msg">
                                        <small style={{
                                            color : 'red', fontSize : '10px'
                                        }}>{idMsg}</small>
                                    </div>
                                )
                            }
                        </li>
                        <li>
                            <input type="password" maxLength="20" placeholder="비밀번호를 입력해주세요" value={pwd} onChange={changePwd} />
                            {
                                pwdError && (
                                    <div className="msg">
                                        <small style={{
                                            color : 'red', fontSize : '10px'
                                        }}>{pwdMsg}</small>
                                    </div>
                                )
                            }
                        </li>
                    </ul>
                </form>
                <div className="find-id-password">
                    <span>아이디 찾기</span>
                    <span>비밀번호 찾기</span>
                </div>
                <div className="login-button">
                    <button onClick={onSubmit}>로그인</button>
                    <button>
                        <Link to="/member">회원가입</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
