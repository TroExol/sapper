import {useCallback, useEffect, useState} from 'react';

import Settings from 'Settings';

import {generateCellType} from 'Util/generateCellType';
import {cloneCells} from 'Util/cloneCells';
import {openAroundCells} from 'Util/openAroundCells';
import {generateEmptyCells} from 'Util/generateEmptyCells';
import {generateInitialCells} from 'Util/generateInitialCells';

/**
 * Хук для игры в сапера
 * @param {number?} initialCountMines
 * @param {number?} gridSize
 * @return {HookSapperReturn}
 */
export function useSapper({
    initialCountMines = Settings.defaultCountMines,
    gridSize = Settings.defaultGridSize,
} = {}) {
    // Пустые ячейки
    const emptyCells = generateEmptyCells(gridSize);
    
    // Тип смайлика в шапке
    const [smileType, setSmileType] = useState('smile');
    // Интервал обновления таймера
    const [intervalTimer, setIntervalTimer] = useState(null);
    // Флаг начала игры
    const [isGameInProgress, setIsGameInProgress] = useState(false);
    // Флаг победы
    const [isWinGame, setIsWinGame] = useState(false);
    // Флаг проигрыша
    const [isLoseGame, setIsLoseGame] = useState(false);
    // Ячейки
    const [cells, setCells] = useState(emptyCells);
    // Таймер
    const [timer, setTimer] = useState(0);
    // Счетчик мин
    const [countMines, setCountMines] = useState(initialCountMines);
    
    useEffect(() => {
        if (isGameInProgress) {
            setIntervalTimer(setInterval(() => {
                setTimer(value => {
                    if (value >= 999) {
                        clearInterval(intervalTimer);
                        return 999;
                    }
                    return value + 1;
                });
            }, 1000));
        } else {
            clearInterval(intervalTimer);
        }
        
        return clearInterval(intervalTimer);
    }, [isGameInProgress]);
    
    /**
     * Открытие первой ячейки
     * @param {Cell[][]} cells
     * @param {Cell} cell - Открытая ячейка
     */
    const openFirstCell = (cells, cell) => {
        const newCells = cloneCells(cells);
        const openedCell = newCells[cell.yAxis][cell.xAxis];
        
        openedCell.isOpen = true;
        openedCell.cellType = generateCellType(openedCell, false);
        
        setCells(generateInitialCells(newCells, openedCell, initialCountMines));
    };
    
    // Победа
    const winGame = cells => {
        setIsGameInProgress(false);
        setIsWinGame(true);
        
        // Отметка флагом оставшиеся мины
        const newCells = cloneCells(cells).map(row =>
            row.map(cell => ({
                ...cell,
                isFlag: cell.isFlag || !cell.isOpen,
                cellType: cell.isFlag || !cell.isOpen
                    ? 'cell-flag'
                    : cell.cellType,
            })));
        
        setCells(newCells);
        setSmileType('smile-cool');
    };
    
    /**
     * Проигрыш
     * @param {Cell[][]} cells
     */
    const loseGame = cells => {
        setIsGameInProgress(false);
        setIsLoseGame(true);
        
        // Отображение мин
        const newCells = cloneCells(cells).map(row =>
            row.map(cell => ({
                ...cell,
                cellType: generateCellType(cell, true),
            })),
        );
        
        setCells(newCells);
        setSmileType('smile-dead');
    };
    
    // Нажатие на смайлик в шапке
    const onSmileFocusIn = useCallback(() => {
        setSmileType('smile-pressed');
    }, []);
    
    // Выход из смайлика в шапке
    const onSmileFocusOut = useCallback(() => {
        const smileType = isWinGame
            ? 'smile-cool'
            : isLoseGame
                ? 'smile-dead'
                : 'smile';
        setSmileType(smileType);
    }, [isWinGame, isLoseGame]);
    
    /**
     * Нажатие на ячейку
     * @type {function(Cell): void}
     */
    const onCellFocusIn = useCallback(cell => {
        if (isGameInProgress && !cell.isOpen && !cell.isFlag && !cell.isQuestion) {
            setSmileType('smile-scared');
        }
    }, [isGameInProgress]);
    
    // Выход из клетки
    const onCellFocusOut = useCallback(() => {
        if (isGameInProgress) {
            setSmileType('smile');
        }
    }, [isGameInProgress]);
    
    // Начало новой игры
    const onRestartGame = useCallback(() => {
        setIsGameInProgress(false);
        setIsWinGame(false);
        setIsLoseGame(false);
        setCells(emptyCells);
        setTimer(0);
        setCountMines(initialCountMines);
        setSmileType('smile');
    }, [initialCountMines]);
    
    /**
     * Открытие клетки
     * @type {function(Cell[][], Cell): void}
     */
    const onOpenCell = useCallback((cells, cell) => {
        if (isLoseGame || isWinGame || cell.isOpen || cell.isFlag || cell.isQuestion) {
            return;
        }
        
        const newCells = cloneCells(cells);
        const openedCell = newCells[cell.yAxis][cell.xAxis];
        
        if (!isGameInProgress) {
            setIsGameInProgress(true);
            openFirstCell(newCells, openedCell);
            return;
        }
        
        openedCell.isOpen = true;
        openedCell.cellType = generateCellType(openedCell, false);
        
        if (openedCell.isMine) {
            loseGame(newCells);
            return;
        }
        
        if (newCells.every(row => row.every(cell => cell.isOpen || cell.isMine))) {
            winGame(newCells);
            return;
        }
        
        if (openedCell.countMines === 0 && !openedCell.isMine) {
            setCells(openAroundCells(newCells, openedCell));
            return;
        }
        
        setCells(newCells);
    }, [isLoseGame, isWinGame, isGameInProgress]);
    
    /**
     * Пкм на ячейке
     * @type {function(Event, Cell[][], Cell): void}
     */
    const onRightClickCell = useCallback((event, cells, cell) => {
        event.preventDefault();
        
        if (!isGameInProgress) {
            return;
        }
        
        if (cell.isOpen) {
            return;
        }
        
        const newCells = cloneCells(cells);
        const clickedCell = newCells[cell.yAxis][cell.xAxis];
        
        if (clickedCell.isFlag) {
            clickedCell.isFlag = false;
            clickedCell.isQuestion = true;
            setCountMines(value => value + 1);
        } else if (clickedCell.isQuestion) {
            clickedCell.isQuestion = false;
        } else {
            clickedCell.isFlag = true;
            setCountMines(value => value - 1);
        }
        clickedCell.cellType = generateCellType(clickedCell, false);
        
        setCells(newCells);
    }, [isGameInProgress]);
    
    return {
        isWinGame,
        isLoseGame,
        smileType,
        timer,
        cells,
        countMines: countMines >= 0
            ? countMines
            : 0,
        onSmileFocusIn,
        onSmileFocusOut,
        onRestartGame,
        onCellFocusIn,
        onCellFocusOut,
        onOpenCell,
        onRightClickCell,
    };
}