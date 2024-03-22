import { useState } from "react";

export function Pra(){
    const [bdMode, setBdMode] = useState('L');
    return(
        <>
            {
                bdMode === 'L' && (
                    <div className="board-wrap">
                        <h1 className="tit">Question</h1>
                        <div className="selbx">
                            <select className="cta" id="cta">
                                <option value="tit">제목</option>
                                <option value="cont">내용</option>
                                <option value="unm">글쓴이</option>
                            </select>
                            <select className="sel" id="sel" onChange={(e) => {}}>
                                <option value="0">Z-A</option>
                                <option value="1">A-Z</option>
                            </select>
                        </div>
                    </div>
                )
            }
        </>
    );
}