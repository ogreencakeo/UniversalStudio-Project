// 회원가입을 위한 로컬스토리지 생성 JS

const clearData = () => {
    localStorage.clear();
    console.log("로컬쓰 클리어!");
};

const initData = () => {
    if (localStorage.getItem("universal-mem-data") === null) {
        localStorage.setItem(
            "universal-mem-data",
            `
                [
                    {
                        "idx": "1",
                        "pwd":"1111",
                        "uid": "admin",
                        "unm": "Administrator",
                        "eml":"admin@dc.com"
                    },
                    {
                        "idx": "2",
                        "pwd":"1111",
                        "uid":"happy",
                        "unm":"happyfood",
                        "eml":"happy@food.com"
                    }
                ]
            `
        );
    }
}; ///////////// initData /////////////////

export { clearData, initData };
