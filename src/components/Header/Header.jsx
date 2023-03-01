import React from 'react';
import SpriteImage from 'Component/SpriteImage';

function Header({
    smileType,
    countMines,
    timer,
    
    onRestartGame,
    onSmileFocusIn,
    onSmileFocusOut,
    
    classes,
}) {
    return (
        <div className={classes.container}>
            <div className={classes.counter}>
                <SpriteImage element={String(~~(countMines / 100))}/>
                <SpriteImage element={String(~~(countMines % 100 / 10))}/>
                <SpriteImage element={String(~~(countMines % 10))}/>
            </div>
            <div className={classes.button}>
                <SpriteImage
                    title='Новая игра'
                    element={smileType}
                    onClick={onRestartGame}
                    onMouseDown={onSmileFocusIn}
                    onMouseUp={onSmileFocusOut}
                    onMouseOut={onSmileFocusOut}/>
            </div>
            <div className={classes.counter}>
                <SpriteImage element={String(~~(timer / 100))}/>
                <SpriteImage element={String(~~(timer % 100 / 10))}/>
                <SpriteImage element={String(~~(timer % 10))}/>
            </div>
        </div>
    );
}

export default Header;