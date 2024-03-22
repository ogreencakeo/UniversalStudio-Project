import { useContext, useEffect, useLayoutEffect } from 'react';
import '../../css/logo.css';
import { universalCon } from './universalContext';
// 제이쿼리
import $ from "jquery";

export function Logo(){
    const myCon = useContext(universalCon);

    useLayoutEffect(()=>{
        window.scrollTo(0,0);
    }, []);
    useEffect(()=>{
        const logoSrollTo = ()=>{
            const topShowNav = document.querySelector('.top-show-nav');
            console.log('hidsfds');
            myCon.chgPage('/', {});
            if(topShowNav){
                console.log('siufhsdif');
                $(".top-show-nav").slideUp().removeClass("on");
            }
        }
        const logoClick = document.querySelector('.nav-logo img');

        if(logoClick){
            logoClick.addEventListener('click', logoSrollTo);
        }

        return(()=>{
            logoClick.removeEventListener('click', logoSrollTo);
        })
    }, []);

    return(
        <div className="nav-logo">
            <img src= {process.env.PUBLIC_URL+ "/images/universal_logo.webp"} alt="로고" onClick={()=>myCon.chgPage('/')} />
            {/* <img src= {process.env.PUBLIC_URL+ "/images/logo.png"} alt="로고" onClick={()=>myCon.chgPage('/')} /> */}
        </div>
    )
}