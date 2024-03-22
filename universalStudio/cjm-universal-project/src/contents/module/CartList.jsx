import { Fragment, memo, useEffect, useState } from "react";
import "../../css/cartList.css";

// 제이쿼리
import $ from "jquery";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBasketShopping,
    faPerson,
    faChild,
    faPersonCane,
    faXmark,
    faCirclePlus,
    faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";


export const CartList = memo(({ selData, flag }) => {
    // console.log(selData);

    const pgBlock = 5;
    const [pgNum, setPgNum] = useState(1);
    const [cartData, setCartData] = useState(selData);
    const [force, setForce] = useState(null);
    console.log('selData',selData);

    if (cartData !== selData && flag.current) {
        setCartData(selData);
        console.log(3333);
    }

    // 전체 데이터 개수
    const cntData = cartData.length;
    console.log('cntDat', cntData)

    // 삭제함수
    const deleteItem = (e) => {
        flag.current = false;

        let confMsg = "정말로 지우시겠습니까?";

        if (window.confirm(confMsg)) {
            const selIdx = $(e.currentTarget).attr("del-idx");
            console.log(e.target);
            console.log("지울아이:", selIdx);

            const newData = cartData.filter((v) => {
                if (v["번호"] !== selIdx) {
                    // console.log('v["번호"]', v['번호'])
                    return true;
                }
            });

            console.log("newData :", newData);

            localStorage.setItem("universal-cart", JSON.stringify(newData));
            setCartData(newData);

            // 상태가 변경되었는지 확인
            console.log("Updated cart data:", newData);
            setForce(Math.random());
        } ////// if /////////
    };
    useEffect(() => {
        if (flag.current) {
            console.log("Setting cart data:", selData);
            setCartData(selData);
        }
    }, [selData, flag.current]);

    //정규식함수(숫자 세자리마다 콤마해주는 기능)
    function addComma(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        $("#mycart")
            .removeClass("on")
            .fadeIn(300, function () {
                $(this).addClass("on");
            });
    }, []);

    const showList = () => {
        $("#cartlist").animate({ right: "0" }, 600);
    };

    const hideList = (e) => {
        e.preventDefault();
        $("#cartlist").animate({ right: "-101.5%" }, 600);
    };

    const chgNum = (e) => {
        const tg = $(e.currentTarget);
        const tgInput = tg.parent().siblings(".item-cnt");
        let cNum = Number(tgInput.val());

        tgInput.focus();

        if (tg.attr("alt") === "증가") cNum++;
        else cNum--;

        if (cNum < 1) cNum = 1;

        tgInput.val(cNum);
        // document.querySelector('.btn-insert').style.display = 'block';

        let tg2 = tg.parent('.btn-cnt');
        console.log('tg2', tg2);
        let cidx = tg2.attr("data-idx");
        flag.current = false;
        cartData.some((v, i) => {
            if (v.번호 == cidx) {
                cartData[i].수량 = tg2.siblings('.item-cnt').val();
                return true;
            }
        });
        localStorage.setItem("universal-cart", JSON.stringify(cartData));
        setCartData(cartData);
        setForce(Math.random());
    };

    //
    const bindList = () => {
        const tempData = [];

        let initNum = (pgNum - 1) * pgBlock;
        let limitNum = pgBlock * pgNum;

        for (let i = initNum; i < limitNum; i++) {
            if (i >= cntData) break;
            tempData.push(cartData[i]);
        }

        if (cartData.length === 0) {
            return (
                <tr>
                    <td colSpan="8">담은 아이템이 없습니다</td>
                </tr>
            );
        }

        return tempData.map((v, i) => (
            <tr key={i}>
                <td>{v.항목}</td>
                {/* <td>{v.번호}</td> */}
                <td>
                    {v.이름 === "성인(만12 - 64세)" && <FontAwesomeIcon icon={faPerson} className="person-icon" />}
                    {v.이름 === "어린이(만4 - 11세)" && <FontAwesomeIcon icon={faChild} className="child-icon" />}
                    {v.이름 === "시니어(만 65세 이상)" && (
                        <FontAwesomeIcon icon={faPersonCane} className="senior-icon" />
                    )}
                </td>
                {/* <td>{v.수량}</td> */}
                <td>{addComma(v.가격)}원</td>
                <td>{addComma(v.가격 * v.수량)}원</td>
                {/* 상품 수량 */}
                <td className="cnt-part">
                    <div>
                        <span>
                            <input type="text" className="item-cnt" readOnly value={v.수량} />
                            
                            <b className="btn-cnt" data-idx={v.번호}>
                                <button alt="증가" onClick={chgNum}>
                                    <h3>
                                        <FontAwesomeIcon icon={faCirclePlus} />
                                    </h3>
                                </button>
                                <button alt="감소" onClick={chgNum}>
                                    <h3>
                                        <FontAwesomeIcon icon={faCircleMinus} />
                                    </h3>
                                </button>
                            </b>
                            
                        </span>
                    </div>
                </td>
                {/* 삭제버튼 */}
                <td>
                    <button className="cfn" del-idx={v.번호} onClick={deleteItem}>
                        <h2><FontAwesomeIcon icon={faXmark} /></h2>
                    </button>
                </td>
            </tr>
        ));
    };

    // 페이징링크
    const pagingLink = () => {
        const blockCnt = Math.floor(cntData / pgBlock);
        const blockPad = cntData % pgBlock;
        const limit = blockCnt + (blockPad === 0 ? 0 : 1);
        let pgCode = [];

        for (let i = 0; i < limit; i++) {
            pgCode[i] = (
                <Fragment key={i}>
                    {pgNum - 1 === i ? (
                        <b>{i + 1}</b>
                    ) : (
                        <a href="#" onClick={chgList}>
                            {i + 1}
                        </a>
                    )}

                    {i < limit - 1 ? " | " : ""}
                </Fragment>
            );
        }

        return pgCode;
    };

    const chgList = (e) => {
        e.preventDefault();
        let currNum = e.target.innerText;
        setPgNum(currNum);
    };


    // 전체 가격 계산
    const totalPriceFn = () => {
        const newPrice = cartData.reduce((total, cartData) => total + cartData.수량 * cartData.가격, 0);
        // setTotalPrice(newPrice);
        return newPrice;
    };

    return (
        <>
            <section id="cartlist">
                <a href="#" className="cbtn cbtn2" onClick={hideList}>
                    <span>
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                </a>
                <table>
                    <caption>
                        <h1> 카트 리스트</h1>
                    </caption>
                    <tbody>
                        <tr>
                            <th>상품</th>
                            <th>사진</th>
                            <th>단가</th>
                            <th>합계</th>
                            <th>수량</th>
                            <th>삭제</th>
                        </tr>

                        {bindList()}
                        <tr>
                            <td colSpan={6}>
                                <h1 className="ticket-total-price">총가격 : ₩ {addComma(totalPriceFn())}원 </h1>
                            </td>
                        </tr>
                        {/* 하단 페이징 부분 */}
                        <tfoot>
                            <tr>
                                <td colSpan="6" className="paging">
                                    {pagingLink()}
                                </td>
                            </tr>
                        </tfoot>
                    </tbody>
                </table>
            </section>
            <div id="mycart" 
            onClick={showList} >
                <h1>
                    <FontAwesomeIcon icon={faBasketShopping} />
                </h1>
                <div className="cntBx">{cntData}</div>
            </div>
        </>
    );
});
