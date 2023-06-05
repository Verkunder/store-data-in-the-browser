// Запись

document.cookie = 'username=John; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/'

// Получение определенной куки

const cookies = document.cookie.split(';')
for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim()
    if (cookie.startsWith('username=')) {
        const username = cookie.substring('username='.length, cookie.length)
        console.log(username)
        break
    }
}
