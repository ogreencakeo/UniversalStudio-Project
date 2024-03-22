import React, { useEffect } from 'react';
import { getWaveText } from '../../Function/indexFn';

const WaveText = () => {
    useEffect(() => {
        const spanWave = document.querySelector('.span_wave');
        const waveText = getWaveText();  // 'getWaveText' 함수를 사용하려면 import 필요

        let waveSpanCode = '';
        let seqNum = 0;

        for (let x of waveText) {
            if (x === ' ') waveSpanCode += '\u00a0\u00a0';
            else{
                waveSpanCode += `<span style="animation-delay : ${seqNum * 0.1}s;">${x}</span>`;
            }
            seqNum++;
        }

        spanWave.innerHTML = waveSpanCode;
    }, []);

    return (
        <div className="header-content">
            <span>#IN JAPAN</span>
            <div className="span_wave"></div>
        </div>
    );
};

export default WaveText;
