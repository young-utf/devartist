/**
 * Created by youngmoon on 1/29/15.
 */
'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

router.get('/', controller.get);

router.post('/', controller.create);

module.exports = router;
