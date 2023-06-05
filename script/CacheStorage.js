/*
Запись
*/

caches.open('my-cache').then(function (cache) {
    cache.put(
        'https://jsonplaceholder.typicode.com/posts',
        new Response('Hello, world!')
    )
})

/* 
Чтение
*/

caches.open('my-cache').then(function (cache) {
    cache
        .match('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            if (response) {
                console.log(response.text())
            }
        })
})

/* 
Удаление данных
*/

caches.open('my-cache').then(function (cache) {
    cache.delete('https://jsonplaceholder.typicode.com/posts')
})

/* 
Проверка наличия данных
*/

caches.open('my-cache').then(function (cache) {
    cache
        .match('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            if (response) {
                console.log('Data is in cache')
            } else {
                console.log('Data is not in cache')
            }
        })
})

/* 
Очистка всего кеша
*/

caches.open('my-cache').then(function (cache) {
    cache.delete()
})
