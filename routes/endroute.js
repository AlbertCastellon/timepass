const express = require('express');
const router = express.Router();
router.get('/endroute', (req, res) => {

  res.send(
    `<h1>Ruta Final</h1><h2>¡Bienvenido a la ruta final!</h2>`
  );
});

router.use((req, res) => {
  res
    .status(404)
    .send(`<h1>Página no encontrada</h1><a href="/">Home</a>`);
});
module.exports = router;
