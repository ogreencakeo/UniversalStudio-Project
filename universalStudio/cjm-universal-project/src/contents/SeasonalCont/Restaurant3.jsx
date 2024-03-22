import React, { useEffect, useLayoutEffect } from "react";
import { SeasonalInfo } from "../module/SeasonalInfo";

export function Restaurant3(){
    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    }, []);
    return(
        <>
            <SeasonalInfo  menu='restaurant3' color='#464a47'/>
        </>
    )
}