const image = new Image
image.src = 'jake.png'

let playerY = 20
let playerX = 130

// TODO:
export const player = {
    x: 20,
    y: 130,
}

export const renderPlayer = (context) => {
    context.drawImage(image, playerX, playerY)
}

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
