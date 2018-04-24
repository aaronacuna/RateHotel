const express = require('express'),
      router = express.Router(),
      users = require('./users.api');


router.param('correo', (req, res, next, correo) => {
  req.body.correo = correo;
  next();
});


router.route('/save_user')
  .post((req, res) => {
    users.registrar(req,res);
});


router.route('/get_all_users')
  .get((req,res) => {
    users.listarTodos(req,res);
});


router.route('/update_user')
  .put((req, res) => {
    users.actualizar(req,res);
});

module.exports = router;