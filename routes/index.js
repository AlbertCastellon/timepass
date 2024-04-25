const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {

  res.send(
    `<h1>¡Bienvenido!</h1><h2>La hora actual es: ${req.time}</h2><button class="btn">Entrar</button>`
  );
});
router.get('/errorhorario', (req, res) => {

    res.send(
      `<h1>¡Bienvenido!</h1><h2>La hora actual es: ${req.time}</h2><h2>Aun no es la hora, espera hasta las 12:00</h2><button class="btn">Entrar</button>`
    );
  });

router.use((req, res) => {
  res
    .status(404)
    .send(`<h1>Página no encontrada</h1><a href="/">Home</a>`);
});
module.exports = router;
