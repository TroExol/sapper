/**
 * @typedef {Object} Cell
 * @property {string} cellType - Тип ячейки
 * @property {boolean} isOpen - Флаг открытой ячейки
 * @property {boolean} isMine - Флаг ячейки с миной
 * @property {boolean} isFlag - Флаг флага
 * @property {boolean} isQuestion - Флаг вопроса
 * @property {number} countMines - Количество мин вокруг ячейки
 * @property {number} yAxis - Координата по оси Y
 * @property {number} xAxis - Координата по оси X
 */

/**
 * @typedef {'smile' | 'smile-pressed' | 'smile-scared' | 'smile-cool' | 'smile-dead'} Smile
 */

/**
 * @typedef {Object} HookSapperReturn
 * @property {boolean} isWinGame - Флаг победы
 * @property {boolean} isLoseGame - Флаг проигрыша
 * @property {Smile} smileType - Тип смайлика в шапке
 * @property {number} timer - Таймер
 * @property {Cell[][]} cells - Ячейки
 * @property {number} countMines - Счетчик мин
 * @property {function(): void} onSmileFocusIn - Нажатие на смайлик в шапке
 * @property {function(): void} onSmileFocusOut - Выход из смайлика в шапке
 * @property {function(): void} onRestartGame - Начало новой игры
 * @property {function(Cell): void} onCellFocusIn - Нажатие на ячейку
 * @property {function(): void} onCellFocusOut - Выход из клетки
 * @property {function(Cell[][], Cell): void} onOpenCell - Открытие клетки
 * @property {function(Event, Cell[][], Cell): void} onRightClickCell - Пкм на ячейке
 */