import React from 'react';

import SpriteImage from 'Component/SpriteImage';

function Grid({
    isWinGame,
    isLoseGame,
    cells,
    
    onCellFocusIn,
    onCellFocusOut,
    onOpenCell,
    onRightClickCell,
    
    classes,
}) {
    return (
        <div className={classes.container}>
            {cells.map(row =>
                row.map(cell => (
                    <SpriteImage
                        key={`${cell.yAxis}_${cell.xAxis}`}
                        element={cell.cellType}
                        className={!isWinGame && !isLoseGame && !cell.isOpen && classes.activeCell}
                        onClick={() => onOpenCell(cells, cell)}
                        onMouseDown={() => onCellFocusIn(cell)}
                        onMouseUp={onCellFocusOut}
                        onMouseOut={onCellFocusOut}
                        onContextMenu={event => onRightClickCell(event, cells, cell)}/>
                )),
            )}
        </div>
    );
}

export default Grid;