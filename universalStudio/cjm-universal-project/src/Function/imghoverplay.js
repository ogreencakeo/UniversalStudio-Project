const hover_wrapper = document.querySelector('.img_hover_play_wrap');
const images = [
    './images/attraction/logo/attraction1.jpg',
    './images/attraction/logo/attraction2.jpg',
    './images/attraction/logo/attraction3.jpg',
];

function createMouseBox(x, y, imageUrl){
    const mouseBox = document.createElement('div');
    mouseBox.className = 'mouseBox';

    const randomRotation = Math.floor(Math. random() * 101) -10;

    mouseBox.style.left = x + 'px';
    mouseBox.style.top = y + 'px';
    mouseBox.style.transform = `rotate(${randomRotation}deg)`;
    mouseBox.innerHTML = `<img class='lazyloaded' src='${imageUrl}'>`;

    setTimeout(()=>{
        mouseBox.style.opacity = 0;
        setTimeout(()=>{
            mouseBox.remove();
        }, 200);
    }, 500);
    return mouseBox;
}

let canShowImage = true;

hover_wrapper.addEventListener('mousemove', function(event){
    if(canShowImage){
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        createMouseBox(mouseX, mouseY, images[Math.floor(Math.random() * images.length)]);

        canShowImage = false;
        setTimeout(()=>{
            canShowImage = true;
        },200);
    }
})