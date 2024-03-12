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

const image = new Image
image.src = 'jake.png'

let playerY = 20
let playerX = 130

const renderPlayer = (context) => {
    context.drawImage(image, playerX, playerY)
}

// TODO: Vyresit lip cekani na nacitani obrazku.
/**
 * Render single frame of an animation in the given canvas.
 */
const renderCanvasFrame = (context) => {
    renderBackground(context)
    renderRectangles(context)
    renderPlayer(context)
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

    image.addEventListener('load', () => {
        startCanvasRendering(context)
    })
})

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowDown':
            playerY += 10
            break
        case 'ArrowUp':
            playerY -= 10
            break
        case 'ArrowLeft':
            playerX -= 10
            break
        case 'ArrowRight':
            playerX += 10
            break
    }
})