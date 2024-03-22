import React, { useEffect, useLayoutEffect } from "react";
import { SeasonalInfo } from "../module/SeasonalInfo";

export function Restaurant8(){
    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    }, []);
    return(
        <>
            <SeasonalInfo  menu='restaurant8' color='#94aff7' />
        </>
    )
}