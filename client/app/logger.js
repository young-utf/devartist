/**
 * Created by youngmoon on 1/16/15.
 */
'use strict';
var noop = function () { };
window.logger = {};
var console = (window.console || {});

if (location.hostname === "54.169.211.165") {
  window.logger.info = noop;
} else {
  if (Function.prototype.bind) {
    window.logger.info = Function.prototype.bind.call(console.log, console);
  } else {
    window.logger.info = function() {
      Function.prototype.apply.call(console.log, console, arguments);
    };
  }
}
