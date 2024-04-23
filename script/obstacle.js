//const wallThickness = 5;

export const obstacle = {
    minX: () => 50,
    maxX: () => 100,
    minY: () => 20,
    maxY: () => 80,

    /*
    leftWall: {
        minX: () => obstacle.minX(),
        maxX: () => obstacle.minX() + wallThickness,
        minY: () => 20,
        maxY: () => 80,
    },
    rightWall: {
        minX: () => obstacle.maxX() - wallThickness,
        maxX: () => obstacle.maxX(),
        minY: () => 20,
        maxY: () => 80,
    },
    topWall: {
        minX: () => 50,
        maxX: () => 100,
        minY: () => obstacle.minY(),
        maxY: () => obstacle.minY() + wallThickness,
    },
    bottomWall: {
        minX: () => 50,
        maxX: () => 100,
        minY: () => obstacle.maxY() - wallThickness,
        maxY: () => obstacle.maxY(),
    },
    */
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
