import React, { useEffect, useLayoutEffect } from "react";
import { SeasonalInfo } from "../module/SeasonalInfo";

export function Restaurant6(){
    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    }, []);
    return(
        <>
            <SeasonalInfo  menu='restaurant6' color='#f5dedc'/>
        </>
    )
}