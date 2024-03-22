import { useEffect, useState } from 'react';
import '../../css/agency.css';
export function MoveAgency() {


    const agencyData = [
        '/images/agency/travel_agency1.jpg',
        '/images/agency/travel_agency2.jpg',
        '/images/agency/travel_agency3.jpg',
        '/images/agency/travel_agency4.jpg',
        '/images/agency/travel_agency5.jpg',
        '/images/agency/travel_agency7.jpg',
        '/images/agency/logo.png',
    ];

    
    const makeScroll = () => {

        const temp = [];
            for(let i=0; i<8; i++){
                temp[i] = (
                    <li key={i}>
                        <img src={process.env.PUBLIC_URL+'/images/agency/logo.png'} alt="logo" />
                    </li>
                )
            }
            return temp;
    };

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <div className='block'>
            <div className="universal-move-logo-span-wrap" style={{ left: `-${scrollPosition}px` }}>
                <div className="universal-move-logo-span">
                    <ul>
                        {makeScroll()}
                    </ul>
                    <ul>
                        {makeScroll()}
                    </ul>
                    <ul>
                        {makeScroll()}
                    </ul>
                </div>
            </div>
        </div>

    );
}