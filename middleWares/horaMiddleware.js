const obtenerHora = (req, res, next) => {
    const date = new Date()
    const hour = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()
    const time = `${hour}:${min}:${sec}`
    req.time = time
    next()
}
module.exports = obtenerHora