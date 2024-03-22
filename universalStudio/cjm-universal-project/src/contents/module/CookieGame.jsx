import { useState } from "react";

export function CookieGame() {
    const cookies = [
        'Chocolate Chip Cookie',
        'Oatmeal Cookie',
        'Peanut Butter Cookie',
        'Snickerdoodle Cookie',
        'Sugar Cookie',
        'Double Chocolate Chip Cookie',
        'Macadamia Nut Cookie',
        'White Chocolate Raspberry Cookie',
        'Almond Joy Cookie',
        'M&M Cookie',
    ];

    const [selectedCookies, setSelectedCookies] = useState([]);
    const [remainingCookies, setRemainingCookies] = useState([...cookies]);
    const [userSelectedCookie, setUserSelectedCookie] = useState(null);
    const [gameStarted, setGameStarted] = useState(false);

    const selectRandomCookies = () => {
        const randomCookies = [];
        while (randomCookies.length < 4) {
            const randomIndex = Math.floor(Math.random() * remainingCookies.length);
            const selectedCookie = remainingCookies[randomIndex];
            if (!randomCookies.includes(selectedCookie)) {
                randomCookies.push(selectedCookie);
            }
        }
        return randomCookies;
    };

    const startGame = () => {
        if (remainingCookies.length < 4) {
            alert('쿠키가 부족해요!');
            return;
        }

        const randomCookies = selectRandomCookies();
        setRemainingCookies(remainingCookies.filter(cookie => !randomCookies.includes(cookie)));
        setSelectedCookies(randomCookies);
        setGameStarted(true);
    };

    const selectUserCookie = (cookie) => {
        setUserSelectedCookie(cookie);
        setSelectedCookies([]);
        setGameStarted(false);
    };

    return (
        <div>
            <h1>포천쿠키 뽑기 게임</h1>
            {userSelectedCookie ? (
                <p>당신이 선택한 쿠키: {userSelectedCookie}</p>
            ) : (
                <div>
                    {gameStarted ? (
                        <p>랜덤으로 뽑힌 4개의 쿠키: {selectedCookies.join(', ')}</p>
                    ) : (
                        <button onClick={startGame}>쿠키를 뽑아주세요</button>
                    )}
                </div>
            )}
            {selectedCookies.length === 4 && !userSelectedCookie && gameStarted && (
                <div>
                    <p>쿠키를 선택해주세요!</p>
                    {selectedCookies.map((cookie) => (
                        <button key={cookie} onClick={() => selectUserCookie(cookie)}>
                            <img src={process.env.PUBLIC_URL + "/images/main/character/character9.gif"} alt="" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}