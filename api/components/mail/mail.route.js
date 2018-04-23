const express = require('express'),
      router = express.Router(),
      mail = require('./mail.api');

/**
 * 
 */
router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});


router.route('/mail')
  .post((req, res) => {
    mail.enviarCorreo(req,res);
});

module.exports = router;