import React from 'react';

import {useSapper} from 'Hook/useSapper';

import Header from 'Component/Header';
import Grid from 'Component/Grid';

function App({
    classes,
}) {
    const {
        isWinGame,
        isLoseGame,
        smileType,
        timer,
        countMines,
        cells,
        onSmileFocusIn,
        onSmileFocusOut,
        onRestartGame,
        onCellFocusIn,
        onCellFocusOut,
        onOpenCell,
        onRightClickCell,
    } = useSapper();
    
    return (
        <>
            <div className={classes.warningContainer}>
                Для игры необходимо открыть эту страницу на устройстве с мышью или трекпадом
            </div>
            <div className={classes.gameContainer}>
                <Header
                    smileType={smileType}
                    countMines={countMines}
                    timer={timer}
                    onRestartGame={onRestartGame}
                    onSmileFocusIn={onSmileFocusIn}
                    onSmileFocusOut={onSmileFocusOut}/>
                <Grid
                    isWinGame={isWinGame}
                    isLoseGame={isLoseGame}
                    cells={cells}
                    onOpenCell={onOpenCell}
                    onCellFocusIn={onCellFocusIn}
                    onCellFocusOut={onCellFocusOut}
                    onRightClickCell={onRightClickCell}/>
            </div>
        </>
    );
}

export default App;
