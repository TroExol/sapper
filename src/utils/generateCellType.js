/**
 * Получение типа ячейки
 * @param {Cell} cell - Ячейка
 * @param {boolean} isLoseGame - Флаг проигрыша
 * @return {string}
 */
export const generateCellType = (cell, isLoseGame) => {
    if (isLoseGame) {
        if (cell.isMine) {
            if (cell.isOpen) {
                return 'cell-mine-undermined';
            }
            if (!cell.isFlag && !cell.isQuestion) {
                return 'cell-mine';
            }
        }
        if (cell.isFlag && !cell.isMine) {
            return 'cell-mine-miss';
        }
    }
    
    if (cell.isFlag) {
        return 'cell-flag';
    }
    if (cell.isQuestion) {
        return 'cell-question';
    }
    if (cell.isOpen) {
        if (cell.countMines === 0) {
            return 'cell-empty';
        } else {
            return `cell-${cell.countMines}`;
        }
    }
    
    return 'cell';
};