// 메인영역

import { Outlet } from "react-router-dom";

export function MainArea(){
    return(
        <main className="cont">
            <Outlet />
        </main>
    )
}