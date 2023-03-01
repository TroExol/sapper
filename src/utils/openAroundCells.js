import {cloneCells} from 'Util/cloneCells';
import {getAroundCells} from 'Util/getAroundCells';
import {generateCellType} from 'Util/generateCellType';

/**
 * Открытие ячеек рядом без мин
 * @param {Cell[][]} cells - Ячейки
 * @param {Cell} cell - Ячейка, относительно которой открывать
 * @return {Cell[][]} - Обновленные ячейки
 */
export const openAroundCells = (cells, cell) => {
    const newCells = cloneCells(cells);
    
    const recursivelyOpenAroundCells = (cells, cell) => {
        const aroundCellCoordinates = getAroundCells(cells, cell);
        
        for (const {yAxis, xAxis} of aroundCellCoordinates) {
            const aroundCell = cells[yAxis][xAxis];
            
            if (aroundCell.isOpen || aroundCell.isMine || aroundCell.isFlag || aroundCell.isQuestion) {
                continue;
            }
            
            aroundCell.isOpen = true;
            aroundCell.cellType = generateCellType(aroundCell, false);
            
            if (!aroundCell.countMines && !aroundCell.isMine) {
                recursivelyOpenAroundCells(cells, aroundCell);
            }
        }
        
        return cells;
    };
    
    return recursivelyOpenAroundCells(newCells, cell);
};