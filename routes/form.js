var express = require('express');
var router = express.Router();
var formController=require('../controller/form_controller')
/* GET home page. */

router.post('/create',formController.create )

module.exports = router;
