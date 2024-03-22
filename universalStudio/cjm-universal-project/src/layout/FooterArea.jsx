// 하단영역

import { Link } from "react-router-dom";
import { fmenu } from "../data/footerMenu";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function FooterArea() {
    const fmenu1 = fmenu[0].footerMenu1;
    const fmenu2 = fmenu[1].footerMenu2;

    return (
        <div className="footer">
            <div className="footer-wrap">
                <div className="footer-wrap-top">
                    <div className="footer-left">
                        UNIVERSAL STUDI
                        <FontAwesomeIcon icon={faFaceSmile} />
                    </div>
                    <div className="footer-right">
                        <img src= {process.env.PUBLIC_URL+ "/images/character/charactre1.png"} alt="슈퍼마리오" />
                        <img src= {process.env.PUBLIC_URL+ "/images/character/character2.png"} alt="햇님" />
                    </div>
                </div>
                <div className="footer-wrap-bottom">
                    <div>
                        <ul>
                            {fmenu1.map((v, i) => (
                                <li key={i}>
                                    <p>{v.txt}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul>
                            { fmenu2.map((v, i) => (
                                <li key={i}>
                                    <p>{v.txt}</p>
                                </li>
                            ))

                            }
                        </ul>
                    </div>
                    <div>
                        TM & © Universal Studios. All rights reserved.
                        <br />
                        ※ 사진은 이미지입니다.
                        <br />
                        ※본 사이트에 게재된 사진과 동영상에는 방문하신 시점의 운영 방법 및 위생 강화 대책 가이드라인을
                        따르지 않은 내용도 포함되어 있습니다.
                    </div>
                </div>
            </div>
        </div>
    );
}
