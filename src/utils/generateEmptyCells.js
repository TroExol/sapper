/**
 * Генерация пустых ячеек
 * @param {number} gridSize - Размер сетки
 * @return {Cell[][]}
 */
export const generateEmptyCells = gridSize => Array
    .from({length: gridSize}, (element, rowIndex) =>
        Array
            .from({length: gridSize}, (element, columnIndex) => {
                return {
                    yAxis: rowIndex,
                    xAxis: columnIndex,
                    cellType: 'cell',
                    isMine: false,
                    isOpen: false,
                    isFlag: false,
                    isQuestion: false,
                    countMines: 0,
                };
            }));