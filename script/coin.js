import {canvas} from '/script/canvas.js'

export const coin = {
    centerX: 200,
    centerY: 200,
    radius:  10,

    minX: () => coin.centerX - coin.radius,
    maxX: () => coin.centerX + coin.radius,
    minY: () => coin.centerY - coin.radius,
    maxY: () => coin.centerY + coin.radius,
}

export const moveCoin = () => {
    coin.centerX = Math.random() * canvas.width
    coin.centerY = Math.random() * canvas.height
}

export const renderCoin = (context) => {
    context.fillStyle = 'yellow'
    context.strokeStyle = 'black'
    context.beginPath()
    context.arc(coin.centerX, coin.centerY, coin.radius, 0, 2 * Math.PI)
    context.fill()
    context.stroke()
}
