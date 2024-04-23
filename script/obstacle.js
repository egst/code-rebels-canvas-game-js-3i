export const obstacle = {
    minX: () => 50,
    maxX: () => 100,
    minY: () => 20,
    maxY: () => 80,
}

export const renderObstacle = (context) => {
    context.fillStyle = 'red'
    context.fillRect(
        obstacle.minX(),
        obstacle.minY(),
        obstacle.maxX() - obstacle.minX(),
        obstacle.maxY() - obstacle.minY(),
    )
}
