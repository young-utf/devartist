/**
 * Created by youngmoon on 3/15/15.
 */

'use strict';

var express = require('express');
var controller = require('./message.controller');

var router = express.Router();

router.get('/', controller.get);

router.post('/', controller.send);

router.put('/', controller.read);

router.delete('/', controller.delete);

module.exports = router;
