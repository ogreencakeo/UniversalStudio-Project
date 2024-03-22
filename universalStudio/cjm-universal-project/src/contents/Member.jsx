import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { universalCon } from '../contents/module/universalContext';

// 로컬스토리지 생성 JS
import { clearData, initData} from '../Function/mem_fn.js';

// CSS
import '../css/member.css';

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";


export function Member() {
    useLayoutEffect(()=>{
        window.scrollTo(0,0);
    }, []);

    // 컨텍스트 API
    const myCon = useContext(universalCon);

    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');
    const [chkPwd, setChkPwd] = useState('');
    const [userName, SetUserName] = useState('');
    const [email, setEmail] = useState('');

    // 에러 상태관리 변수
    const [userIdError, setUserIdError] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [chkPwdError, setChkPwdError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const msgId = [
        '아이디는 최소 5문자가 포함되어있습니다.',
        '이미 사용중인 아이디입니다.',
        '사용 가능한 아이디입니다.'
    ];

    const msgEtc = {
        pwd : '특수문자, 문자, 숫자 형태로 5~15자리를 사용하십시오.',
        confPwd : '비밀번호 확인이 일치하지 않습니다.',
        req : '필수항목은 반드시 기입하셔야 합니다.',
        email : '이메일 형식에 맞게 입력해주세요'
    };
    
    const [idMsg, setIdMsg] = useState(msgId[0]);

    // 아이디 유효성 검사
    const changeUserId = (e) => {
        const valid = /^[A-Za-z0-9+]{5,}$/;

        if(valid.test(e.target.value)){
            initData();
            let memData = localStorage.getItem('universal-mem-data');
            memData = JSON.parse(memData);

            // 기존 아이디가 있으면 상태값 false로 업데이트
            let isOk = true;

            memData.forEach((v) => {
                if(v.uid === e.target.value){
                    setIdMsg(msgId[1]);
                    setUserIdError(true);
                    isOk = false;
                }
            });

            if(isOk){
                setIdMsg(msgId[2]);
                setUserIdError(false);
            }
            
        }else{
            setIdMsg(msgId[0]);
            setUserIdError(true);
        }
        setUserId(e.target.value);
    }

    const changePwd = (e) => {
        const valid = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

        if(valid.test(e.target.value)) setPwdError(false);
        else setPwdError(true);

        setPwd(e.target.value);
    }

    const changeChkPwd = (e) => {
        
        if(pwd == e.target.value) setChkPwdError(false);
        else setChkPwdError(true);

        setChkPwd(e.target.value);
    }

    const changeUserName = (e) => {
        if(e.target.value != '') setUserNameError(false);
        else setUserNameError(true);

        SetUserName(e.target.value);
    } 

    const changeEmail = (e) => {
        const valid =  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(valid.test(e.target.value)) setEmailError(false);
        else setEmailError(true);
        setEmail(e.target.value);
    }

    const totalValid = () => {
        if(!userId) setUserIdError(true);
        if(!pwd) setPwdError(true);
        if(!chkPwd) setChkPwdError(true);
        if(!userName) setUserNameError(true);
        if(!email) setEmailError(true);

        if(
            userId &&
            pwd &&
            chkPwd &&
            userName &&
            email &&
            !userIdError &&
            !pwdError &&
            !chkPwdError &&
            !userNameError &&
            !emailError
        )
            return true;
        else return false;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(totalValid()){
            initData();
            let memData = localStorage.getItem('universal-mem-data');
            memData = JSON.parse(memData);

            let newData = {
                idx : memData.length + 1,
                uid : userId,
                pwd : pwd,
                unm : userName,
                eml : email
            };

            memData.push(newData);

            // 로컬스에 반영하기
            localStorage.setItem('universal-mem-data', JSON.stringify(memData));
            // document.querySelector('.sbtn').innerText = '넌 이제 회원인거야~!';

            alert('로그인 페이지로 이동하겠습니다!');
            myCon.chgPage('login', {});
            
        }else{
            alert('입력창을 수정해주시오.');
        }
    }

    return (
        <>
            <div className="join-the-membership-wrap">
                {/* 회원가입 박스 */}
                <div className="member-bx">
                    <h1><FontAwesomeIcon icon={faUserGroup} /></h1>
                    <h2>회원가입</h2>
                    <form action="process.php" method="post">
                        <table>
                            <tr>
                                <td><label>아이디 </label></td>
                                <td>
                                    <input type="text" maxLength="20" placeholder="아이디를 입력해주세요" value={userId} onChange={changeUserId} />
                                    {
                                        userIdError && (
                                            <div className="msg">
                                                <small style={{
                                                    color : 'red',
                                                    fontSize : '10px'
                                                }}>
                                                    {idMsg}
                                                </small>
                                            </div>
                                        )
                                    }
                                    {
                                        !userIdError && userId && (
                                            <div className="msg">
                                                <small style={{
                                                    color : 'green',
                                                    fontSize : '10px'
                                                }}>
                                                    {msgId[2]}
                                                    {/* {msgId} */}
                                                </small>
                                            </div>
                                        )
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td><label>비밀번호 </label></td>
                                <td>
                                    <input type="password" maxLength="20" placeholder="비밀번호를 입력해주세요" value={pwd} onChange={changePwd} />
                                    {
                                        pwdError && (
                                            <div className="msg">
                                                <small style={{
                                                    color : 'red',
                                                    fontSize : '10px'
                                                }}>
                                                    {msgEtc.pwd}
                                                </small>
                                            </div>
                                        )
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td><label>비밀번호 확인 </label></td>
                                <td>
                                    <input type="password" maxLength="20" placeholder="비밀번호를 다시 입력해주세요" value={chkPwd} onChange={changeChkPwd} />
                                    {
                                        chkPwdError && (
                                            <div className="msg">
                                                <small style={{
                                                    color : 'red',
                                                    fontSize : '10px'
                                                }}>
                                                    {msgEtc.confPwd}
                                                </small>
                                            </div>
                                        )
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td><label>닉네임</label></td>
                                <td>
                                    <input type="text" maxLength="20" placeholder="닉네임을 입력해주세요" value={userName} onChange={changeUserName} />
                                    {
                                        userNameError && (
                                            <div className="msg">
                                                <small style={{
                                                    color : 'red',
                                                    fontSize : '10px'
                                                }}>
                                                    {msgEtc.req}
                                                </small>
                                            </div>
                                        )
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td><label>이메일</label></td>
                                <td>
                                    <input type="text" maxLength={50} placeholder="예)universal@studio.com" value={email} onChange={changeEmail} />
                                    {
                                        emailError && (
                                            <div className="msg">
                                                <small style={{
                                                    color : 'red',
                                                    fontSize : '10px'
                                                }}>
                                                    {msgEtc.email}
                                                </small>
                                            </div>
                                        )
                                    }
                                </td>
                            </tr>
                            <tr>
                                <button className="sbtn" onClick={onSubmit}>
                                    가입하기
                                </button>
                            </tr>
                        </table>
                        <p>로그인 페이지로 이동하겠습니까?
                            <strong>
                                <Link className="login-link" to='/login'>로그인하기</Link>
                            </strong>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}