import { useEffect, useLayoutEffect, useState } from "react";

import '../../css/noticeModal.css';

export function NoticeModal() {
  const [isModalOpen, setModalOpen] = useState(true);

  useLayoutEffect(() => {
    const modalWrap = document.querySelector(".notice-modal-wrap");
    const closeButton = document.querySelector(
      ".modal-btn-bx button:last-child"
    );

    const handleModalClose = () => {
      modalWrap.style.display = "none";
      // console.log("hi");
    };

    if (localStorage.getItem("lastClosedTime")) {
      let lastClosedTime = parseInt(
        localStorage.getItem("lastClosedTime"),
        10
      );
      const twentyFourHoursAgo = new Date().getTime() + 24 * 60 * 60 * 1000;

      // console.log(lastClosedTime, ">", twentyFourHoursAgo);

      if (lastClosedTime > twentyFourHoursAgo) {
        setModalOpen(true);
      } else {
        setModalOpen(false);
      }
    }

    if (closeButton) {
      closeButton.addEventListener("click", () => {
        handleModalClose();
        const currentTime = new Date().getTime();
        localStorage.setItem("lastClosedTime", currentTime.toString());
      });
      return () => {
        closeButton.removeEventListener("click", handleModalClose);
      };
    }

    console.log(333);
  });

  useEffect(()=>{

    const closeBtnFn = () => {
      document.querySelector('.notice-modal-wrap').classList.add('close');
    };

    const closeBtn = document.querySelector('.closeBtn');
    if(closeBtn){
      closeBtn.addEventListener('click', closeBtnFn);
    }
    return(()=>{
      closeBtn.removeEventListener('click',closeBtnFn )
    })
  })

  // const handleClose = () => {
  //     const currentTime = new Date().getTime();
  //     localStorage.setItem("lastClosedTime", currentTime.toString());
  //     console.log('handleClose executed');
  // };

  return (
    <div className={`notice-modal-wrap ${isModalOpen ? "" : "close"}`}>
      <div className="notice-modal">
        <div>
          <h3>
            ※ 본 웹사이트는 유니버설 스튜디오의 공식 웹사이트가 아니며, 상업적인
            목적이 아닌 개인적인 포트폴리오 제작을 위해 만들어졌습니다. 사용된
            모든 콘텐츠는 원본 창작자의 권리를 존중하며 출처를 명시하여
            사용하였습니다.
          </h3>
          <br />
          <h4>
            {" "}
            유니버설 스튜디오 재팬의 공식 웹 사이트 주소
            <br />
            <a href="https://www.usj.co.jp/web/ko/kr" target="_blank">
              https://www.usj.co.jp/web/ko/kr
            </a>
          </h4>
          <br />
          <h4>저작권과 상표</h4>
          <span>
            WIZARDING WORLD and all related trademarks, characters, names, and
            indicia are © & ™ Warner Bros. Entertainment Inc. Publishing Rights
            © JKR. (s23) Minions and all related elements and indicia TM & ©
            2023 Universal Studios. All rights reserved. © Nintend BEETLEJUICE
            and all related characters and elements © & ™ Warner Bros.
            Entertainment Inc. (s23) TM & © 2023 Sesame Workshop © 2023 Peanuts
            Worldwide LLC © 2023 SANRIO CO., LTD.　APPROVAL NO.EJ6031502 Shrek ©
            2023 DreamWorks Animation LLC. All Rights Reserved. © 2023 MARVEL ©
            Walter Lantz Productions LLC TM & © Universal Studios & Amblin
            Entertainment TM & © Universal Studios. © 2023 UNIVERSAL STUDIOS ©
            TOMY　　「トランスフォーマー」、「TRANSFORMERS」
            は株式会社タカラトミーの登録商標です。 TRANSFORMERS and all related
            characters are trademarks of Hasbro and are used with permission. ©
            2023 Hasbro. All Rights Reserved. Licensed by Hasbro. Curious George
            ®, created by Margret and H.A. Rey, is copyrighted and trademarked
            by HarperCollins Publishing Company and used under license. Licensed
            by Universal Studios Licensing, Inc. All rights reserved. ©2023
            Pokémon. ©1995-2023 Nintendo/Creatures Inc. /GAME FREAK inc.
            ©KADOKAWA ©KoyoharuGotoge/ SHUEISHA, Aniplex, ufotable © SISYU
            Detective Conan by Gosho Aoyama (published in Shogakukan’s Weekly
            Shonen Sunday magazine) © 2024 GOSHO AOYAMA/DETECTIVE CONAN
            COMMITTEE © SCRAP All Rights Reserved. © K. Horikoshi / Shueisha, My
            Hero Academia Project ©CAPCOM CO., LTD. ALL RIGHTS RESERVED. ©Gosho
            Aoyama/1996,2024 Shogakukan,YTV,TMS TM & © Universal Studios. All
            rights reserved.
          </span>
        </div>
        <div className="modal-btn-bx">
          <button className="closeBtn">X</button>
          <button>하루동안 닫기</button>
        </div>
      </div>
    </div>
  );
}
