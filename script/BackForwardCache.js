/* 
Запись
*/

window.history.pushState({ data: 'Hello, world!' }, 'Title', '/page')

/* 
Чтение
 */

window.onpopstate = function (event) {
    if (event.state) {
        console.log(event.state.data)
    }
}

/* Удаление */

window.history.replaceState({ data: 'New data' }, 'Title', '/page')

/* 
Проверка наличия 
*/

if (window.history.state) {
    console.log(window.history.state.data)
}
