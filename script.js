import {renderObstacle} from '/script/obstacle.js'
import {renderPlayer}   from '/script/player.js'
import {renderCoin}     from '/script/coin.js'

const renderBackground = (context) => {
    context.fillStyle = 'white'
    context.fillRect(
        0, 0,
        context.canvas.width, context.canvas.height,
    )
}

/**
 * Render single frame of an animation in the given canvas.
 */
const renderCanvasFrame = (context) => {
    renderBackground(context)
    renderObstacle(context)
    renderPlayer(context)
    renderCoin(context)
}

/**
 * Start infite loop of rendering consecutive
 * animation frames into the given canvas.
 */
const startCanvasRendering = (context) => {
    renderCanvasFrame(context)
    requestAnimationFrame(() => {
        startCanvasRendering(context)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('#game-canvas')
    const context = canvas.getContext('2d')

    startCanvasRendering(context)
})
