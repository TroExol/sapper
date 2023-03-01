# Сапер

Всеми любимый (или не очень) сапер.

Тестовое задание на стажировку в ВК.

## Запуск

### Стенд
Просмотреть приложение можно по адресу [https://troexol.github.io/sapper/](https://troexol.github.io/sapper/).
P.S. Иконка сайта не работает в силу невозможности в GitHub Pages избавиться от саб директории после домена

### Локальный запуск
Для запуска необходимо установить пакеты (`npm i`) и запустить приложение (`npm start`).
Приложение запустится по адресу [http://localhost:3000](http://localhost:3000).

## Игра
Чтобы начать игру, нужно щелкнуть в произвольном месте на поле. Откроется некоторый участок поля, на котором появятся цифры. Все эти цифры служат для облегчения поиска установленной мины.

Цифра "1" означает, что в расположенных вокруг нее ячейках, находится одна мина. Чтобы случайно на нее не нажать, щелкните по ней правой клавишей мышки. На этой клетке появится флажок, а счетчик сюрпризов, которые нужно найти, уменьшится.

Чтобы отменить выделение, дважды щелкните правой клавишей мышки. Флажок сначала сменится на знак вопроса (можете его оставить, если не уверены, есть ли там взрывоопасный сюрприз), а после второго "клика" исчезнет.

Вычисляя все возможные места нахождения мин, вы понемногу открываете карту. Внимательно смотрите и находите взрывоопасные сюрпризы: как только попадете на занятую миной клетку, игра окончена.
