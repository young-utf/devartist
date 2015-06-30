/**
 * Created by youngmoon on 6/12/15.
 */

'use strict';

var express = require('express');
var controller = require('./mdn.controller');
var router = express.Router();

router.get('/', controller.index);
router.get('/page', controller.page);
router.get('/getAll', controller.getAll);
router.get('/create', controller.create);

module.exports = router;