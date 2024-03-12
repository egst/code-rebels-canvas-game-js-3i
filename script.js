import {getTime, timer, setTime} from '/script/timer.js'
import {renderPlayer} from '/script/player.js'

const renderBackground = (context) => {
    context.fillStyle = 'white'
    context.fillRect(
        0, 0,
        context.canvas.width, context.canvas.height,
    )
}

const renderRectangles = (context) => {
    context.fillStyle = 'red'
    context.fillRect(10, 20, 30, 40)
    context.fillRect(50, 20, 30, 40)
    context.fillStyle = 'blue'
    context.fillRect(90, 20, 30, 40)
}


// TODO: Vyresit lip cekani na nacitani obrazku.
/**
 * Render single frame of an animation in the given canvas.
 */
const renderCanvasFrame = (context) => {
    renderBackground(context)
    renderRectangles(context)
    renderPlayer(context) // TODO: Import from player.
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

    // TODO: Consider not waiting for the image to load.
    //image.addEventListener('load', () => {
        startCanvasRendering(context)
    //})

    document.querySelector('#check-time').addEventListener('click', () => {
        console.log(timer)
        setTime(100)
    })
})
