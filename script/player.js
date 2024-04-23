import {obstacle} from '/script/obstacle.js'
import {coin, moveCoin} from '/script/coin.js'

const image = new Image
image.src = 'jake.png'

export const player = {
    x: 20,
    y: 130,
    width: 50,
    height: 50,
    maxX: () => player.x + 50,
    maxY: () => player.y + 50,
    coins: 0,
}

const updateCoins = (coins) => {
    player.coins = coins
    const counter = document.querySelector('#coins-counter')
    counter.innerText = `${coins} ${coins == 1 ? 'coin' : 'coins'}`
}

export const renderPlayer = (context) => {
    context.strokeStyle = 'green'
    context.strokeRect(player.x, player.y, player.width, player.height)
    context.drawImage(image, player.x, player.y)
}

const collisionWith = (object) =>
    player.x      < object.maxX() &&
    player.maxX() > object.minX() &&
    player.y      < object.maxY() &&
    player.maxY() > object.minY()

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowDown':
            player.y += 10
            break
        case 'ArrowUp':
            player.y -= 10
            break
        case 'ArrowLeft':
            player.x -= 10
            break
        case 'ArrowRight':
            player.x += 10
            break
    }

    if (collisionWith(coin)) {
        moveCoin()
        updateCoins(player.coins + 1)
    }
})
