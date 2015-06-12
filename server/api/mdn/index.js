/**
 * Created by youngmoon on 6/12/15.
 */

'use strict';

var express = require('express');
var controller = require('./mdn.controller');
var router = express.Router();

router.get('/', controller.index);
router.get('/page', controller.page);

module.exports = router;