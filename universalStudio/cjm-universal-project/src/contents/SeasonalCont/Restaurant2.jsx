import React, { useEffect, useLayoutEffect } from "react";
import { SeasonalInfo } from "../module/SeasonalInfo";

export function Restaurant2(){
    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    }, []);
    return(
        <>
            <SeasonalInfo  menu='restaurant2' color='#c5d6c6'/>
        </>
    )   
}