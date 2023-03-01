/**
 * Получить координаты ячеек вокруг указанной
 * @param {Cell[][]} cells
 * @param {Cell} cell - Ячейка, вокруг которой надо получить координаты
 * @return {{yAxis: number, xAxis: number}[]}
 */
export const getAroundCells = (cells, {yAxis, xAxis}) => {
    const aroundCells = [];
    const aroundCoordinates = [
        {yAxis: yAxis - 1, xAxis: xAxis - 1},
        {yAxis: yAxis - 1, xAxis: xAxis},
        {yAxis: yAxis - 1, xAxis: xAxis + 1},
        {yAxis, xAxis: xAxis - 1},
        {yAxis, xAxis: xAxis + 1},
        {yAxis: yAxis + 1, xAxis: xAxis - 1},
        {yAxis: yAxis + 1, xAxis: xAxis},
        {yAxis: yAxis + 1, xAxis: xAxis + 1},
    ];
    
    aroundCoordinates.forEach(({yAxis, xAxis}) => {
        if (cells[yAxis]?.[xAxis]) {
            aroundCells.push({yAxis, xAxis});
        }
    });
    
    return aroundCells;
};