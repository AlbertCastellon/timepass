const express = require('express')
const app = express()
const horaMiddleware = require('./middleWares/horaMiddleware.js')
const validarHora = require('./middleWares/validarHora.js')
const endroute = require('./routes/endroute.js')
const index = require('./routes/index.js')

app.get('/', horaMiddleware, validarHora, index);
app.get('/errorhorario', horaMiddleware, index)
app.get('/endroute', endroute)
app.listen(3000, () => {
    console.log('Server on');
  });
  