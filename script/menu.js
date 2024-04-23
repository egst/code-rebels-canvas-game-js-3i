document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#game-menu-button')
    const menu   = document.querySelector('#game-menu')

    button.addEventListener('click', () => {
        menu.classList.toggle('hidden')
    })
})