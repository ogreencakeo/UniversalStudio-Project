import { useEffect, useState } from 'react';
import '../css/loading.css';

export function Loading() {
    const loadingTxt = 'LOADING';


    const [progress, setProgress] = useState(0);

    
    useEffect(() => {
        const progressBarInterval = setInterval(() => {
            setProgress((prevProgress) => {

                prevProgress++;
                if(prevProgress>100){
                    prevProgress = 100;
                }
                return prevProgress;
            });
            
        }, 3000 / 100); 

        return () => clearInterval(progressBarInterval);
    }, []);



    const makeCode = () => {
        return loadingTxt.split('').map((v, i) => (
            <span key={i} style={{ '--char-index': i }}>
                {v}
            </span>
        ));
    };

    return (
        <div className="loadpage-page">
            <div>
                <div className='loadpage-img-bx'>
                    {/* 이미지를 상태에 따라 렌더링 */}
                    <img src={process.env.PUBLIC_URL + '/images/loading/1.png'} />
                </div>
                <h1 className="loading-text">
                    {makeCode()}
                </h1>
                {/* 프로그레스 바 */}
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
                {/* 퍼센티지 */}
                <h3 style={
                    {
                        color: progress >80 ? 'red' : 'black',
                    }
                }>{progress} %</h3>
            </div>
        </div>
    );
};
