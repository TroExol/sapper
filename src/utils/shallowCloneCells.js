/**
 * Поверхностное клонирование массива ячеек
 * @param {Cell[][]} cells
 * @return {Cell[][]}
 */
export const shallowCloneCells = cells => {
    return [...cells];
};