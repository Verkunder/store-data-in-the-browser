/* 
Для записи данных в IndexedDB с использованием ORM (Object-Relational Mapping) можно использовать библиотеку, такую как Dexie.js. Dexie.js предоставляет простой и удобный интерфейс для работы с IndexedDB.
*/

import Dexie from 'dexie'

const db = new Dexie('myDatabase')
db.version(1).stores({
    users: '++id, name, age',
})

db.users.add({ name: 'John', age: 30 })

db.users.get(1).then(user => {
    console.log(user.name, user.age)
})

db.users.toArray().then(users => {
    console.log(users)
})
