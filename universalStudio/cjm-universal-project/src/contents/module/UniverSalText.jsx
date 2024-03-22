export function UniverSalText() {
    const move_txt = "UNIVERSAL STUDIO";

    const makeTextCode = (i) => {
        const temp = [];
        for (let i = 0; i < 4; i++) {
            temp[i] = <li key={i}>{move_txt}</li>;
        }
        return temp;
    };
    return (
        <>
            <div className="main3">
                <div className="logo-move-wrap">
                    <div className="logo-span-move-wrap">
                        <div className="logo-span-wrap logo-span-ani">
                            <ul>{makeTextCode()}</ul>
                            <ul>{makeTextCode()}</ul>
                        </div>
                    </div>
                    <div class="logo-span-move-wrap span-move2">
                        <div class="logo-span-wrap logo-span-ani2">
                            <ul>{makeTextCode()}</ul>
                            <ul>{makeTextCode()}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}