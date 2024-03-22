import { useLocation } from "react-router-dom";
import { Seaching2 } from "./module/Seaching2";
import { useEffect, useLayoutEffect } from "react";

export function SchPage(){
    useLayoutEffect(()=>{
        window.scrollTo(0,0);
    }, []);
    const loc = useLocation();
    let keyword;

    if(loc.state) keyword = loc.state.keyword;

    return(
        <>
            <Seaching2 kword={keyword} />
        </>
    );
}