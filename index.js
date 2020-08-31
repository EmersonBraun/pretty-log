"use strict";
exports.__esModule = true;
exports.custom = exports.error = exports.warn = exports.success = exports.info = void 0;
var figures_1 = require("figures");
var chalk_1 = require("chalk");
var log = console.log;
function mountColoredLog(options) {
    var color = options.color, icon = options.icon, title = options.title;
    return chalk_1["default"][color](figures_1["default"][icon]) + "  " + chalk_1["default"].underline[color](title);
}
function info(msg) {
    var colored = mountColoredLog({
        color: 'blue',
        icon: 'info',
        title: 'info'
    });
    log(colored + "  " + msg);
}
exports.info = info;
function success(msg) {
    var colored = mountColoredLog({
        color: 'green',
        icon: 'tick',
        title: 'success'
    });
    log(colored + "  " + msg);
}
exports.success = success;
function warn(msg) {
    var colored = mountColoredLog({
        color: 'yellow',
        icon: 'warning',
        title: 'warn'
    });
    log(colored + "  " + msg);
}
exports.warn = warn;
function error(msg) {
    var colored = mountColoredLog({
        color: 'red',
        icon: 'cross',
        title: 'error'
    });
    log(colored + "  " + msg);
}
exports.error = error;
function custom(msg, options) {
    var colored = mountColoredLog(options);
    log(colored + "  " + msg);
}
exports.custom = custom;
