/**
 * Клонирует массив ячеек
 * @param {Cell[][]} cells
 * @return {Cell[][]}
 */
export const cloneCells = cells => {
    return cells.map(row => row.map(cell => ({...cell})));
};