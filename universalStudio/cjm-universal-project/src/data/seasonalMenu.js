
/*
    location : 판매장소
    service_type : 서비스 타입
    payment_method : 결제 방법
    menu_provided : 제공 메뉴
    japanese_page : 일본어 페이지
    englisgh_page : 영어 페이지
    children_page : 어린이 페이지
    seasonal_img : 메뉴 이미지
    seasonal_main_img : 메인 이미지
    seasonal_logo : 로고 이미지
    title : 제목
    sub_title : 서브 제목
*/
export const seasonalMenu = {
    "restaurant1" :{
        "idx" : "1",
        "link" : "restaurant1",
        "location" : "스튜디오 스타즈 레스토랑",
        "service_type" : "퀵서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정), 어린이 메뉴, 양식, 식사류,이유식 있음, 돼지고기 미사용·무알코올 메뉴(영어 페이지 한정)`,
        "restaurant_bg" : "restaurant_bg1.jpg",
        "restaurant_map" : "restaurant_map1.jpg",
        "pickup_menu" : [
            {
                "idx" : "1-1",
                "image" : "seasonal1-1.jpg",
                "menu" : "DJ 피카츄 업 업♪ 할로윈 파티 플레이트 세트",
                "price" : "￥2,400",
                "menu_description" : "소고기 레드 와인 조림, 감자 그라탱, 콘 라이스, 소프트드링크（R）"
            },
            {
                "idx" : "1-2",
                "image" : "seasonal1-2.jpg",
                "menu" : "DJ 팬텀 에브리 나잇♪ 할로윈 파티 플레이트 세트",
                "price" : "￥2,400",
                "menu_description" : "돼지고기 안심 커틀릿&카레 3종류(키마, 블랙, 유럽풍), 블랙 라이스, 소프트드링크（R）"
            },
            {
                "idx" : "1-3",
                "image" : "seasonal1-3.jpg",
                "menu" : "DJ 피카츄&DJ 팬텀 점핑 할로윈 파티 키즈 세트",
                "price" : "￥1,400",
                "menu_description" : `치즈 햄버그스테이크, 거봉 크림 도넛, 새우튀김, 크로켓, 감자튀김, 호박 샐러드, 콘 라이스, 오렌지 음료※ 만 11세 이하의 어린이 메뉴`
            },
        ],
        "recommended_menu" : [
            {
                "idx" : "1-4",
                "image" : "seasonal1-4.jpg",
                "menu" : "따라쟁이! 따라큐 밀크 무스&크레이프",
                "price" : "￥1,100",
                "menu_description" : ""
            },
            {
                "idx" : "1-5",
                "image" : "seasonal1-5.jpg",
                "menu" : "다크펫 점핑 초콜릿 케이크",
                "price" : "￥950",
                "menu_description" : "",
            },
            {
                "idx" : "1-6",
                "image" : "seasonal1-6.jpg",
                "menu" : "무우마의 장난!? 그레이프 젤리&소다",
                "price" : "￥700",
                "menu_description" : "",
            },
        ],
        "seasonal_logo" : "seasonal1.jpg",
        "seasonal_main_img" : "seasonal1-main.jpg",
        "title" : "영화 스튜디오 내의 카페테리아",
        "sub_title" : "아빠와 아이는 물론 가족 모두가 만족할 수 있는 다양한 메뉴, 그리고 유아식 판매와 좌석 안내 등 엄마에게 편리한 서비스까지 한가득!"
    },
    "restaurant2" :{
        "idx" : "2",
        "link" : "restaurant2",
        "location" : "피네간즈 바&그릴",
        "service_type" : "풀 서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정), 어린이 메뉴, 양식, 바・주류`,
        "restaurant_bg" : "restaurant_bg2.jpg",
        "restaurant_map" : "restaurant_map2.jpg",
        "pickup_menu" : [
            {
                "idx" : "2-1",
                "image" : "seasonal2-1.jpg",
                "menu" : "할로윈 아이리시 세트",
                "price" : "￥3,200",
                "menu_description" : "포크립, 피시&칩스, 펌킨 아이리시 오믈렛, 무화과와 포도 콩포트, 대파 감자 수프, 빵"
            },
            {
                "idx" : "2-2",
                "image" : "seasonal2-2.jpg",
                "menu" : "그릴 치킨&펌킨 샐러드",
                "price" : "￥1,100",
                "menu_description" : ""
            },
            {
                "idx" : "2-3",
                "image" : "seasonal2-3.jpg",
                "menu" : `(왼쪽) 할로윈 카니발 하이볼 ~블러드 오렌지~^(오른쪽) 할로윈 칵테일 ~믹스 베리~ (무알코올 드링크)`,
                "price" : `(왼쪽) ¥850^(오른쪽) ¥700`,
                "menu_description" : "",
            },
            {
                "idx" : "2-4",
                "image" : "seasonal2-4.jpg",
                "menu" : "피네간즈 스테이크 세트",
                "price" : "￥2,800",
                "menu_description" : "비프스테이크, 대파 감자 수프, 프라이드 포테이토, 크리스프 샌드위치",
            },
            {
                "idx" : "2-5",
                "image" : "seasonal2-5.jpg",
                "menu" : "아이리시 비프스튜 세트",
                "price" : "￥2,500",
                "menu_description" : "아이리시 비프스튜, 샐러드, 빵",
            },
            {
                "idx" : "2-6",
                "image" : "seasonal2-6.jpg",
                "menu" : "로스트 치킨 세트",
                "price" : "￥2,500",
                "menu_description" : "로스트치킨, 대파 감자 수프, 빵"
            },
        ],
        "recommended_menu" : [
            {
                "idx" : "2-7",
                "image" : "seasonal2-7.jpg",
                "menu" : "어니언 블라썸",
                "price" : "￥1,200",
                "menu_description" : ""
            },
            {
                "idx" : "2-8",
                "image" : "seasonal2-8.jpg",
                "menu" : "피네간즈 키즈 세트",
                "price" : "￥1,400",
                "menu_description" : `햄버거, 피시 버거, 프라이드 포테이토, 콘버터, 오렌지 음료^^※ 만 11세 이하의 어린이 메뉴`,
            },
            {
                "idx" : "2-9",
                "image" : "seasonal2-9.jpg",
                "menu" : "하프 야드 그린 칵테일",
                "price" : "￥1,300",
                "menu_description" : "",
            },
        ],
        "seasonal_logo" : "seasonal2.png",
        "seasonal_main_img" : "seasonal2-main.jpg",
        "title" : "브루클린에 있는 아일랜드풍 술집에서 서양 요리를 즐겨 보세요",
        "sub_title" : `제철 과일로 만든 하이볼 칵테일을 맛볼 수 있는 카운터 바도 병설.협찬: Suntory Spirits Ltd.`
    },
    "restaurant3" : {
        "idx" : "3",
        "link" : "restaurant3",
        "location" : "루이즈 N.Y. 피자 팔러",
        "service_type" : "퀵서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정), 피자`,
        "japanese_page" : "https://www.usj.co.jp/web/ja/jp/service-guide/barrier-free/food-allergies",
        "englisgh_page" : "",
        "children_page" : "",
        "restaurant_bg" : "restaurant_bg3.jpg",
        "restaurant_map" : "restaurant_map3.jpg",
        "pickup_menu" : [
            {
                "idx" : "3-1",
                "image" : "seasonal3-1.jpg",
                "menu" : "할로윈 피자 세트",
                "price" : "",
                "menu_description" : `제노베제 ~베이컨&블랙 올리브~, 프라이드 포테이토, 소프트드링크(R)￥1,650홀 피자￥5,400`,
            },
            {
                "idx" : "3-2",
                "image" : "seasonal3-2.jpg",
                "menu" : `피자콰트로 치즈 ~4가지 종류의 치즈&꿀~`,
                "price" : "",
                "menu_description" : `루이즈 피자 세트(프라이드 포테이토, 소프트드링크 포함)￥1,550^홀 피자^￥4,800`
            },
            {
                "idx" : "3-3",
                "image" : "seasonal3-3.jpg",
                "menu" : `피자마르게리타 ∼토마토&바질∼`,
                "price" : "",
                "menu_description" : `루이즈 피자 세트(프라이드 포테이토, 소프트드링크 포함)￥1,450홀 피자￥4,200`,
            },
            {
                "idx" : "3-4",
                "image" : "seasonal3-4.jpg",
                "menu" : `피자페퍼로니`,
                "price" : "",
                "menu_description" : `루이즈 피자 세트(프라이드 포테이토, 소프트드링크 포함)￥1,450홀 피자￥4,200`,
            },
        ],
        "recommended_menu" : [
            {
                "idx" : "3-5",
                "image" : "seasonal3-5.jpg",
                "menu" : `각종 사이드 메뉴(왼쪽) 라이스 크로켓(오른쪽)슈림프 컵 샐러드`,
                "price" : "각￥550",
                "menu_description" : ""
            },
            {
                "idx" : "3-6",
                "image" : "seasonal3-6.jpg",
                "menu" : "티라미수",
                "price" : "￥500",
                "menu_description" : "",
            },
        ],
        "seasonal_logo" : "seasonal3.png",
        "seasonal_main_img" : "seasonal3-main.jpg",
        "title" : "빅 사이즈의 본고장 피자를 맛볼 수 있는 뉴욕 리틀 이태리 피자 팔러.",
        "sub_title" : ""
    },
    "restaurant4" : {
        "idx" : "4",
        "link" : "restaurant4",
        "location" : "비버리힐즈 블랑제리",
        "service_type" : "퀵서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `디저트, 샌드위치, 햄버거`,
        "restaurant_bg" : "restaurant_bg4.jpg",
        "restaurant_map" : "restaurant_map4.jpg",
        "pickup_menu" : [
            {
                "idx" : "4-1",
                "image" : "seasonal4-1.jpg",
                "menu" : "파스트라미 비프&모차렐라 치즈 핫 샌드위치 세트",
                "price" : "￥1,600",
                "menu_description" : "파스트라미 비프&모차렐라 치즈 핫 샌드위치, 컵 샐러드, 소프트드링크(R)",
            },
            {
                "idx" : "4-2",
                "image" : "seasonal4-2.jpg",
                "menu" : "크루아상 샌드위치 세트",
                "price" : "￥1,500",
                "menu_description" : "훈제 트라우트 연어&아보카도, 컵 샐러드, 소프트드링크(R)",
            },
            {
                "idx" : "4-3",
                "image" : "seasonal4-3.jpg",
                "menu" : "치킨과 각종 채소의 믹스 샌드위치 세트",
                "price" : "￥1,500",
                "menu_description" : "치킨과 각종 채소의 믹스 샌드위치, 컵 샐러드, 소프트드링크(R)",
            },
            {
                "idx" : "4-4",
                "image" : "seasonal4-4.jpg",
                "menu" : "믹스 베리 샐러드",
                "price" : "￥800",
                "menu_description" : "",
            },
        ],
        "recommended_menu" : [
            {
                "idx" : "4-5",
                "image" : "specialty4-1.jpg",
                "menu" : "(왼쪽) 슈톨렌풍 큐브 케이크^(앞) 산타클로스 ~스트로베리 무스~ ^(오른쪽) 크리스마스트리 ~레몬향 화이트초콜릿 케이크~",
                "price" : "(왼쪽) ¥900^(앞) ¥850^(오른쪽)¥850",
                "menu_description" : ``
            },
            {
                "idx" : "4-6",
                "image" : "specialty4-2.jpg",
                "menu" : "(왼쪽) 라즈베리 아몬드 타르트^(가운데) 과일 듬뿍 치즈 케이크^(오른쪽) 더블 푸딩 미니 파르페",
                "price" : "각￥750",
                "menu_description" : "",
            },
            {
                "idx" : "4-6",
                "image" : "specialty4-3.jpg",
                "menu" : "향긋한 과일티 ~백도와 믹스베리~",
                "price" : "￥600",
                "menu_description" : "",
            },
        ],
        "seasonal_logo" : "seasonal4.png",
        "seasonal_main_img" : "seasonal4-main.jpg",
        "title" : "비버리힐즈의 길목, 프렌치 스타일의 카페에서 샌드위치와 디저트를",
        "sub_title" : `50년대풍 분위기가 매력적인 햄버거 레스토랑.협찬: Coca-Cola(Japan)Company, Limited and Coca-Cola Bottlers Japan Inc.`
    },
    "restaurant5" : {
        "idx" : "5",
        "link" : "restaurant5",
        "location" : "키노피오 카페™",
        "service_type" : "퀵서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저알레르기 메뉴(일본어 페이지 한정), 어린이 메뉴, 양식, 샌드위치, 햄버거`,
        "restaurant_bg" : "restaurant_bg5.jpg",
        "restaurant_map" : "restaurant_map5.jpg",
        "pickup_menu" : [
            {
                "idx" : "5-1",
                "image" : "seasonal5-1.jpg",
                "menu" : "셰프 특제 그라탱·햄버거스테이크&매시드 포테이토 트리(빵 또는 라이스 포함)",
                "price" : "￥2,700",
                "menu_description" : "",
            },
            {
                "idx" : "5-2",
                "image" : "seasonal5-2.jpg",
                "menu" : "마리오 버거 ~베이컨&치즈~",
                "price" : "￥2,300",
                "menu_description" : "",
            },
            {
                "idx" : "5-3",
                "image" : "seasonal5-3.jpg",
                "menu" : "루이지 버거 ~그린 카레·치킨~",
                "price" : "￥2,300",
                "menu_description" : "",
            },
            {
                "idx" : "5-4",
                "image" : "seasonal5-4.jpg",
                "menu" : "슈퍼버섯 피자 볼 ~양송이가 들어간 토마토소스~",
                "price" : "￥1,600",
                "menu_description" : "",
            },
            {
                "idx" : "5-5",
                "image" : "seasonal5-5.jpg",
                "menu" : "뻐끔플라워 카프레제",
                "price" : "￥1,300",
                "menu_description" : "",
            },
            {
                "idx" : "5-6",
                "image" : "seasonal5-6.jpg",
                "menu" : "요시 스파게티 ~시금치 카르보나라~",
                "price" : "￥2,200",
                "menu_description" : "",
            },
            {
                "idx" : "5-7",
                "image" : "seasonal5-7.jpg",
                "menu" : "데리야키 치킨&슈퍼스타 라이스",
                "price" : "￥2,200",
                "menu_description" : "",
            },
            {
                "idx" : "5-8",
                "image" : "seasonal5-8.jpg",
                "menu" : "요시가 좋아하는 과일과 채소 샐러드",
                "price" : "￥1,400",
                "menu_description" : "",
            },
        ],
        "recommended_menu" : [
            {
                "idx" : "5-1",
                "image" : "specialty5-1.jpg",
                "menu" : "셰프 특제 그루터기 케이크∼초콜릿∼",
                "price" : "￥950",
                "menu_description" : ``
            },
            {
                "idx" : "5-2",
                "image" : "specialty5-2.jpg",
                "menu" : "햄버거 키즈 세트(마리오 데코픽 포함)",
                "price" : "￥1,600",
                "menu_description" : `※ 만 11세 이하의 어린이 메뉴`,
            },
            {
                "idx" : "5-3",
                "image" : "specialty5-3.jpg",
                "menu" : "카레라이스 키즈 세트",
                "price" : "￥1,200",
                "menu_description" : "※ 만 6세 이하의 어린이 메뉴",
            },
            {
                "idx" : "5-4",
                "image" : "specialty5-4.jpg",
                "menu" : "?블록 티라미수",
                "price" : "￥800",
                "menu_description" : "",
            },
            {
                "idx" : "5-5",
                "image" : "specialty5-5.jpg",
                "menu" : "피치공주 케이크",
                "price" : "￥3,000",
                "menu_description" : "",
            },
        ],
        "seasonal_logo" : "seasonal5.jpg",
        "seasonal_main_img" : "seasonal5-main.jpg",
        "title" : "키노피오 하우스가 장난기 가득한 행복 레스토랑으로!",
        "sub_title" : `무척 밝고 열심히 일하는 셰프 키노피오가 솜씨를 발휘해 만든 장난기 가득한 식사를 맛보세요! 창문으로 안을 들여다보면 버섯 왕국의 즐거운 한때를 엿볼 수 있어요.^※ 당일 상황에 따라 정리권을 배부합니다. 정리권은 예정 매수에 달하는 대로 배부를 종료합니다.`
    },
    "restaurant6" :{
        "idx" : "6",
        "link" : "restaurant6",
        "location" : "스누피™ 백롯 카페",
        "service_type" : "퀵서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정), 어린이 메뉴, 디저트, 면류, 파스타, 샌드위치, 햄버거, 이유식 있음`,
        "restaurant_bg" : "restaurant_bg6.jpg",
        "restaurant_map" : "restaurant_map6.jpg",
        "pickup_menu" : [
            {
                "idx" : "6-1",
                "image" : "seasonal6-1.jpg",
                "menu" : "할로윈 토마토 크림 스파게티 세트",
                "price" : "￥1,650",
                "menu_description" : "할로윈 토마토 크림 스파게티, 프라이드 포테이토, 소프트드링크(R)",
            },
            {
                "idx" : "6-2",
                "image" : "seasonal6-2.jpg",
                "menu" : "미트 스파게티 세트",
                "price" : "￥1,550",
                "menu_description" : "미트 스파게티, 프라이드 포테이토, 소프트드링크(R)",
            },
            {
                "idx" : "6-3",
                "image" : "seasonal6-3.jpg",
                "menu" : "데리야키 비프버거 세트",
                "price" : "￥1,450",
                "menu_description" : "데리야키 비프버거, 프라이드 포테이토, 소프트드링크(R)",
            },
            {
                "idx" : "6-4",
                "image" : "seasonal6-4.jpg",
                "menu" : "새우 커틀릿 버거 세트",
                "price" : "￥1,450",
                "menu_description" : "새우 커틀릿 버거, 프라이드 포테이토, 소프트드링크(R)",
            },
        ],
        "recommended_menu" : [
            {
                "idx" : "6-5",
                "image" : "seasonal6-5.jpg",
                "menu" : "스누피 펌킨 케이크 ~캐러멜&치즈 크림~",
                "price" : "￥650",
                "menu_description" : ""
            },
            {
                "idx" : "6-6",
                "image" : "seasonal6-6.jpg",
                "menu" : "스누피 키즈 세트",
                "price" : "각￥1,000",
                "menu_description" : `A 팬케이크, 치킨 너겟, 프라이드 포테이토, 스낵, 오렌지 음료B 샌드위치, 치킨 너겟, 프라이드 포테이토, 스낵, 오렌지 음료※ 만 11세 이하의 어린이 메뉴※ 사진은 B 샌드위치`,
            },
        ],
        "seasonal_logo" : "seasonal6.jpg",
        "seasonal_main_img" : "seasonal6-main.jpg",
        "title" : "스누피 친구들의 단골 카페",
        "sub_title" : "",
    },
    "restaurant7" : {
        "idx" : "7",
        "link" : "restaurant7",
        "location" : "해피니스 카페®",
        "service_type" : "퀵서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정), 어린이 메뉴, 양식, 식사류, 미니언 푸드 있음`,
        "restaurant_bg" : "restaurant_bg7.jpg",
        "restaurant_map" : "restaurant_map7.jpg",
        "pickup_menu" : [
            {
                "idx" : "7-1",
                "image" : "seasonal7-1.jpg",
                "menu" : "미니언 버거 플레이트",
                "price" : "￥2,100",
                "menu_description" : "미니언 민스 커틀릿 버거, 프라이드 포테이토, 어니언링, 샐러드, 드링크 바",
            },
            {
                "idx" : "7-2",
                "image" : "seasonal7-2.jpg",
                "menu" : "미니언 프라이드치킨 플레이트",
                "price" : "￥2,100",
                "menu_description" : "프라이드치킨, 호박과 파프리카 마리네, 밥, 샐러드, 콘 차우더, 드링크 바",
            },
            {
                "idx" : "7-3",
                "image" : "seasonal7-3.jpg",
                "menu" : "키마카레 플레이트",
                "price" : "￥2,000",
                "menu_description" : "키마카레, 라이스, 샐러드, 드링크바",
            },
        ],
        "recommended_menu" : [
            {
                "idx" : "7-4",
                "image" : "seasonal7-4.jpg",
                "menu" : "미니언 키즈 카레 플레이트",
                "price" : "￥1,100",
                "menu_description" : `카레라이스, 새우튀김, 치킨 너겟, 프라이드 포테이토, 호박 샐러드, 푸딩, 드링크바※ 만 11세 이하의 어린이 메뉴`
            },
            {
                "idx" : "7-5",
                "image" : "seasonal7-5.jpg",
                "menu" : "디저트&드링크바 세트",
                "price" : "￥1,050",
                "menu_description" : "할로윈 미니언 슈크림 ~초코 바나나~"
            },
        ],
        "seasonal_logo" : "seasonal7.jpg",
        "seasonal_main_img" : "seasonal7-main.jpg",
        "title" : "샌프란시스코의 창고를 개조한 행복이 가득한 카페",
        "sub_title" : "협찬: Coca-Cola(Japan)Company, Limited and Coca-Cola Bottlers Japan Inc.",
    },
    "restaurant8" : {
        "idx" : "8",
        "link" : "restaurant8",
        "location" : "파크 사이드 그릴",
        "service_type" : "풀 서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정), 어린이 메뉴, 양식, 바・주류, 베지테리언(영어 페이지 한정)`,
        "restaurant_bg" : "restaurant_bg8.jpg",
        "restaurant_map" : "restaurant_map8.jpg",
        "pickup_menu" : [
            {
                "idx" : "8-1",
                "image" : "seasonal8-1.jpg",
                "menu" : "갈릭 라이스를 곁들인 앵거스 비프와 아와오도리(치킨)의 그릴 플레이트",
                "price" : "￥3,800",
                "menu_description" : "앵거스 에이징 스테이크(숙성육), 아와오도리(치킨), 새우, 채소 그릴, 갈릭 라이스",
            },
            {
                "idx" : "8-2",
                "image" : "seasonal8-2.jpg",
                "menu" : "앵거스 에이징 스테이크 400g/250g",
                "price" : "￥5,300/￥4,100",
                "menu_description" : `그릴 설로인 스테이크그릴 립 아이 스테이크매시드 포테이토, 빵 포함`
            },
            {
                "idx" : "8-3",
                "image" : "seasonal8-3.jpg",
                "menu" : "뉴질랜드산 램 촙 ∼허브 풍미∼",
                "price" : "￥2,750",
                "menu_description" : "매시드 포테이토, 빵 포함",
            },
            {
                "idx" : "8-4",
                "image" : "seasonal8-4.jpg",
                "menu" : "도쿠시마현산 아와오도리 닭고기 머스터드 소스",
                "price" : "￥2,450",
                "menu_description" : "매시드 포테이토, 빵 포함",
            },
        ],
        "recommended_menu" : [
            {
                "idx" : "8-5",
                "image" : "seasonal8-5.jpg",
                "menu" : "키즈 샌드위치 플레이트",
                "price" : "￥1,400",
                "menu_description" : `치킨과 달걀 샌드위치, 프라이드 포테이토, 디저트, 오렌지 음료※ 만 11세 이하의 어린이 메뉴`
            },
            {
                "idx" : "8-6",
                "image" : "seasonal8-6.jpg",
                "menu" : `왼쪽) 그릴 파르페 ~바나나 카라멜리제&스파이시 파인~(오른쪽) 딸기 초콜릿 파르페`,
                "price" : `(왼쪽) ¥1,800(오른쪽) ¥1,500`,
                "menu_description" : `※14:00 ~ 17:00 한정 판매(레스토랑 영업시간에 따릅니다.)`
            },
        ],
        "seasonal_logo" : "seasonal8.jpg",
        "seasonal_main_img" : "seasonal8-main.jpg",
        "title" : "전망 좋은 점포 내에서 맛보는 본격 에이징 비프(숙성 쇠고기)와 맥주로 호사로운 시간을.",
        "sub_title" : "협찬: Suntory Spirits Ltd."
    },
    
        
}