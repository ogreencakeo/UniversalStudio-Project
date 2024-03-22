import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function dragFn() {
    const updataWin = () => $(window).width();
    let winW = updataWin();

    const TRS_TIME_DT = ".8s ease-out";
    const TRS_TIME_MOB = ".3s ease-out";

    const target = $(".pick-up-wrap");
    console.log('target :', target);

    target
        .draggable({
            axis: "x",
        })
        .css({
            transition: winW < 500 ? TRS_TIME_MOB : TRS_TIME_DT,
        });

    $(window).resize(() => {
        winW = updataWin();

        // firstPoint = winW / 3;
        // firstPoint = winW/10;
        firstPoint = 0;
        console.log("업데이트 한계값:", firstPoint);

        // lastPoint = target.width() - (winW / 3) * 2;
        // lastPoint = target.width() - (winW / 10) * 9;
        lastPoint = target.width() - winW;
        console.log("마지막 한계값:", lastPoint);

        target.css({
            transition: winW < 500 ? TRS_TIME_MOB : TRS_TIME_DT,
        });
    });
    if (winW < 500) target.css({ transition: TRS_TIME_MOB });

    // let firstPoint = winW / 3;
    // let firstPoint = winW / 10;
    let firstPoint = 0;
    console.log("첫번째 한계값:", firstPoint);

    // let lastPoint = target.width() - (winW / 3) * 2;
    // let lastPoint = target.width() - (winW / 10) * 9;
    let lastPoint = target.width() - winW;
    console.log("마지막 한계값:", lastPoint);

    $(".pick-up-wrap").on("mousedown mouseup mousemove", () => {
        let tgPos = target.offset().left;
        console.log("현재left값:", tgPos);

        if (tgPos > firstPoint) {
            target.css({
                left: firstPoint + "px",
            });
        } else if (tgPos < -lastPoint) {
            target.css({
                left: -lastPoint + "px",
            });
        }
    });
}
