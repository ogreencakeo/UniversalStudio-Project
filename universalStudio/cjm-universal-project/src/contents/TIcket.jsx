// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaste, faCircleUser, faHourglassHalf, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faCalendarWeek, faLocationDot, faTicket, faEye } from "@fortawesome/free-solid-svg-icons";
// import "../css/ticket.css";
import "../css/ticket2.css";

// 모듈 불러오기
import { TicketOption } from "./module/TicketOption";
import { UniverSalText } from "./module/UniverSalText";
import { ImgMoveSlide } from "./module/ImgMoveSlide";
import { MoveAgency } from "./module/MoveAgency";
import { useEffect, useLayoutEffect } from "react";

export function Ticket() {
    useLayoutEffect(()=>{
        window.scrollTo(0,0);
    }, []);
    const ticket_info = [
        {
            font: <FontAwesomeIcon icon={faPaste} />,
            txt: "바우처 즉시 제공",
        },
        {
            font: <FontAwesomeIcon icon={faCircleUser} />,
            txt: "1명",
        },
        {
            font: <FontAwesomeIcon icon={faCalendarWeek} />,
            txt: "모바일 바우처 사용",
        },
        {
            font: <FontAwesomeIcon icon={faHourglassHalf} />,
            txt: "유효기간내 사용",
        },
        {
            font: <FontAwesomeIcon icon={faCircleXmark} />,
            txt: "취소불가",
        },
        {
            font: <FontAwesomeIcon icon={faLocationDot} />,
            txt: "오사카",
        },
    ];

    const tickOp = ['[1일권 Low Price (A시즌)]', '[1일권 Middle Price (B시즌)]', '[1일권 High Price (C시즌)]']

    const makeTiOption = () => {
        const temp = [];
        for (let i = 0; i < 3; i++) {
            temp[i] =
                (
                    <div className="ticket-option-bx" key={i}>
                        <h3>{tickOp[i]}</h3>
                        <h1><FontAwesomeIcon icon={faTicket} /></h1>
                        <h2><FontAwesomeIcon icon={faEye} /></h2>
                    </div>
                )
        }
        return temp;
    };

    useEffect(()=>{

        const showBox = (txt) => {
            const tg = document.querySelector(txt);
            if(tg){
                const tgPosition = tg.getBoundingClientRect().top;
                if(tgPosition < window.innerHeight){
                    tg.classList.add('on');
                }else{
                    tg.classList.remove('on');
                }
            }
        };

        const handleScroll = () => {
            showBox('.ticket-inquiry-cont>img');
        }

        window.addEventListener('scroll', handleScroll);
        return(()=>window.removeEventListener('scroll', handleScroll));
    });


    return (
        <>
            <div className="ticket-wrap">
                <div className="ticket-wrap-bx">
                    {/* 티켓 메인 이미지 */}
                    <div className="ticket-main-img">
                        <img src={process.env.PUBLIC_URL + "/images/main/character/character3.png"} alt="마리오" />
                        <span>UNIVERSAL STUDIO</span>
                    </div>
                    {/* 티켓 메인 정보 */}
                    <div className="ticket-main-cont">
                        <h1>유니버셜 스튜디오 재팬 1일 입장권</h1>
                        <h2>
                            #[일본] 오사카 유니버셜 스튜디오 재팬 입장권 티켓 #USJ
                            <br />
                            #가족이랑#우리 아이와#친구와#여럿이서#짜릿한 액티비티 즐기러
                        </h2>
                        {/* 티켓 정보 */}
                        <div className="ticket-info-bx">
                            {ticket_info.map((v, i) => (
                                <div key={i}>
                                    <span>{v.font}</span>
                                    <span>{v.txt}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <MoveAgency />
                {/* 티켓 구입 문의 */}
                <div className="ticket-purchase-inquiry">
                    <div className="ticket-inquiry-img">
                        <img src={process.env.PUBLIC_URL + "/images/main/character/character7.png"} alt="티켓 구입 문의" />
                        <div className="ticket-inquiry-cont">
                            <img src={process.env.PUBLIC_URL + "/images/main/character/character12.gif"} alt="지구 이미지" />
                            <p>
                                문의처: JTR Web Global Support Center Email:contact@jtrweb.com
                                <br />
                                ※이 메일 주소는 여행사 전용 비즈니스 메일입니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ticket-option-wrap">
                    <div className="ticket-option-bx-wrap">
                        {/* 티켓옵션박스 A시즌~C시즌 */}
                        {makeTiOption()}
                    </div>
                    <TicketOption />
                </div>
            </div>
            <UniverSalText />
            <ImgMoveSlide imgMove="ticket" />
        </>
    );
}
