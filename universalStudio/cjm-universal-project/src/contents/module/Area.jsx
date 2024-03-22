import '../../css/area.css';
import { AreaSwiper } from '../pages/plugin/AreaSwiper';

export function Area(){
    return(
        <div className="area-cont-bx">
            {/* <ul>
                <li><button><span>슈퍼 닌텐도 월드™</span></button></li>
                <li><button><span>위저딩 월드 오브 해리 포터™</span></button></li>
                <li><button><span>미니언 파크</span></button></li>
                <li><button><span>유니버설 원더랜드</span></button></li>
                <li><button><span>쥬라기 공원</span></button></li>
            </ul> */}
            <AreaSwiper />
        </div>
    );
}