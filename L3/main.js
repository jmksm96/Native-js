// 1. Проверяет наличие функции-обработчика - при нажатии кнопки
// 2. Генерирует объект с описанием события (event, ev, e)
// 3. Вызывает ф-ию-обработчик и передаёт ей объект
// event в качестве параметра

const sm = document.getElementById("small")
const big = document.getElementById("big")
const mdm = document.getElementById("medium")

const onClickHandler = (e) => {
    // alert('Clicked div')
    console.dir(e.currentTarget.id)
}

sm.onclick = onClickHandler
// mdm.onclick = onClickHandler
// big.onclick = onClickHandler

//e.target => элемент, который сгенерировал событие (первый получил клик)
//e.currentTarget => элемент, который вызвал обработчик в процессе всплытия
// часто значения e.target и e.currentTarget совпадают, но безопаснее использовать e.currentTarget