import React, { useEffect, useLayoutEffect } from "react";
import { SeasonalInfo } from "../module/SeasonalInfo";

export function Restaurant4(){
    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    }, []);
    return(
        <>
            <SeasonalInfo  menu='restaurant4' color='#f7f6bc' />
        </>
    )
}