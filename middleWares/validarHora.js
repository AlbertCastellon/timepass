const horaMiddleware = require('./horaMiddleware')

const validarHora = (req, res, next) => {
    let arr = req.time.split(':')
    arr.pop()
    let decTime = parseFloat(arr.join('.'))
    console.log(decTime)
    if(decTime <= 12.00){
        res.redirect('/endroute')
    }else{
        res.redirect('/errorhorario')
    }
    next()
}
module.exports = validarHora