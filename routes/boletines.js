'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  var results = [ {
    title: 'Boletín Junio 2016',
    type: 'pdf',
    link: 'https://www.dropbox.com/s/kfnq88o8hc2ubum/Propato%20y%20Asociados%20-%20Bolet%C3%ADn%202016-06.pdf?dl=1'
  },{
    title: 'Boletín Noviembre 2015',
    type: 'pdf',
    link: 'https://www.dropbox.com/s/lg297uglvyixak0/Propato%20y%20Asociados%20-%20Bolet%C3%ADn%202015-11.pdf?dl=1'
  }
];
  
  res.send(results);
});

module.exports = router;

module.exports = router;
