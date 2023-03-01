import {getAroundCells} from 'Util/getAroundCells';
import {openAroundCells} from 'Util/openAroundCells';
import {cloneCells} from 'Util/cloneCells';

/**
 * Генерация начальной сетки
 * @param {Cell[][]} cells
 * @param {Cell} cell - Открытая ячейка
 * @param {number} initialCountMines - Начальное кол-во мин
 * @return {Cell[][]}
 */
export const generateInitialCells = (cells, cell, initialCountMines) => {
    const newCells = cloneCells(cells);
    const openedCell = newCells[cell.yAxis][cell.xAxis];
    
    // Генерация мин
    const mineCoordinates = [];
    while (mineCoordinates.length < initialCountMines) {
        const randYAxis = Math.floor(Math.random() * newCells.length);
        const randXAxis = Math.floor(Math.random() * newCells.length);
        
        // Не устанавливать мину вокруг первой открытой ячейки и не устанавливать мину поверх другой
        if ([openedCell.yAxis, openedCell.yAxis + 1, openedCell.yAxis - 1].includes(randYAxis)
            && [openedCell.xAxis, openedCell.xAxis + 1, openedCell.xAxis - 1].includes(randXAxis)
            || mineCoordinates.some(({yAxis: mineY, xAxis: mineX}) => mineY === randYAxis && mineX === randXAxis)) {
            continue;
        }
        
        mineCoordinates.push({yAxis: randYAxis, xAxis: randXAxis});
    }
    
    // Установка мин
    mineCoordinates.forEach(({yAxis, xAxis}) => {
        newCells[yAxis][xAxis].isMine = true;
    });
    
    // Подсчет мин вокруг ячеек
    newCells.forEach(row => {
        row.forEach(cell => {
            if (cell.isMine) {
                return;
            }
            const aroundCells = getAroundCells(newCells, cell);
            newCells[cell.yAxis][cell.xAxis].countMines = aroundCells
                .reduce((sum, {yAxis, xAxis}) => sum + newCells[yAxis][xAxis].isMine, 0);
        });
    });
    
    return openAroundCells(newCells, openedCell);
};