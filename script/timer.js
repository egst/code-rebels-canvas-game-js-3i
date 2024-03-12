export let timer = 0

setInterval(() => {
    timer += 1
}, 1000)

export const getTime = () => timer
export const setTime = (newTime) => {
    timer = newTime
}
