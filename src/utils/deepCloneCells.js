/**
 * Глубокое клонирование массива ячеек
 * @param {Cell[][]} cells
 * @return {Cell[][]}
 */
export const deepCloneCells = cells => {
    return cells.map(row => row.map(cell => ({...cell})));
};