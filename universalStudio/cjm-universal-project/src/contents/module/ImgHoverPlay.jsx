import { useEffect, useState } from 'react';
import '../../css/img_hover.css';
import { UniverSalText } from './UniverSalText.jsx';
// import '../../Function/imghoverplay.js';

export function ImgHoverPlay() {

    const [images, setImages] = useState([
        // './images/attraction/logo/attraction1.jpg',
        '/images/attraction/logo/attraction1.jpg',
        '/images/attraction/logo/attraction2.jpg',
        '/images/attraction/logo/attraction3.png',
        '/images/attraction/logo/attraction4.jpg',
        '/images/attraction/logo/attraction5.jpg',
        '/images/attraction/logo/attraction12.jpg',
        '/images/attraction/logo/attraction14.jpg',
        '/images/attraction/logo/attraction17.jpg',
        '/images/attraction/logo/attraction18.jpg',
        '/images/attraction/logo/attraction39.png',
        '/images/attraction/logo/attraction40.jpg',
        '/images/attraction/logo/attraction41.jpg',
    ]);

    const [canShowImage, setCanShowImage] = useState(true);

    const handleMouseMove = (event) => {
        if (canShowImage) {
            const mouseX = event.pageX;  // clientX 대신에 pageX 사용
            const mouseY = event.pageY;

            // 이미지를 표시하는 로직
            createMouseBox(mouseX, mouseY, images[Math.floor(Math.random() * images.length)]);

            setCanShowImage(false);
            setTimeout(() => {
                setCanShowImage(true);
            }, 300);
        }
    };

    useEffect(() => {
        const hoverWrapper = document.querySelector('.img_hover_play_wrap');

        if (hoverWrapper) {
            hoverWrapper.addEventListener('mousemove', handleMouseMove);

            return () => {
                hoverWrapper.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, [handleMouseMove]);

    const createMouseBox = (x, y, imageUrl) => {
        console.log('Creating mouse box with image URL:', imageUrl);
        const mouseBox = document.createElement('div');
        mouseBox.className = 'mouseBox';
    
        const randomRotation = Math.floor(Math.random() * 30) - 10;
    
        mouseBox.style.left = x + 'px';
        mouseBox.style.top = y + 'px';
        mouseBox.style.transform = `rotate(${randomRotation}deg)`;
    
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.src = process.env.PUBLIC_URL +imageUrl;
        imgElement.className = 'lazyloaded';
    
        mouseBox.appendChild(imgElement);
    
        document.body.appendChild(mouseBox); // 여기서 실제 DOM에 추가
    
        setTimeout(() => {
            mouseBox.style.opacity = 0;
            setTimeout(() => {
                mouseBox.remove();
            }, 200);
        }, 300);
    };
    
    return (
        <>
            <div className="img_hover_play_wrap">
                <div className='character14'>
                    <img src= {process.env.PUBLIC_URL + "/images/main/character/character14.png"} alt="카세트" />
                </div>
                <div className='character15'>
                    <img src= {process.env.PUBLIC_URL + "/images/main/character/character15.gif"} alt="필름" />
                </div>
            </div>
        </>
    );
}