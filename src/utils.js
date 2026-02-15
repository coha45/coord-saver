export const isEmpty = (arr) => {
    return arr.length === 0
}

export const genId = () => {
    return Math.random().toString(36).substring(2)
}

export const truncate = (str, max = 10) => {
    if (str.length >= max) return str.slice(0, max).concat("...")
    return str
}

export const title = (str) => {
    if (str.length <= 1) return str.toUpperCase()
    return str[0].toUpperCase().concat(str.slice(1,str.length))
}