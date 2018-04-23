const express = require('express'),
      router = express.Router(),
      users = require('./hotels.api');


router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});


router.route('/save_hotel')
  .post((req, res) => {
    users.registrar(req,res);
});


router.route('/get_all_hotels')
  .get((req, res) => {
    users.listarTodos(req,res);
});


router.route('/update_hotels')
  .put((req, res) => {
    users.actualizar(req,res);
});

module.exports = router;