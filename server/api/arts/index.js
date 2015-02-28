/**
 * Created by youngmoon on 1/29/15.
 */
'use strict';

var express = require('express');
var controller = require('./arts.controller');
var System = {};
System.out = require('../../common');

var router = express.Router();

router.get('/', controller.get);

router.post('/file/upload', controller.create);

router.post('/file/upload', controller.create);

module.exports = router;