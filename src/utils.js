export const isEmpty = (arr) => {
    return arr.length === 0
}

export const genId = () => {
    return Math.random().toString(36).substring(2)
}