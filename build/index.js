"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var figures_1 = __importDefault(require("figures"));
var log = console.log;
function getIcon(options) {
    var selectedIcon = options.icon || 'tick';
    if (options.iconColor && options.iconUnderlined) {
        return "" + chalk_1.default.underline[options.iconColor](figures_1.default[selectedIcon]);
    }
    if (options.iconColor && !options.iconUnderlined) {
        return "" + chalk_1.default[options.iconColor](figures_1.default[selectedIcon]);
    }
    if (!options.iconColor && options.iconUnderlined) {
        return "" + chalk_1.default.underline(figures_1.default[selectedIcon]);
    }
    return figures_1.default[selectedIcon];
}
function getSpace(value) {
    if (value === void 0) { value = 2; }
    var space = '';
    for (var index = 0; index < value; index++) {
        space += ' ';
    }
    return space;
}
function getTitle(options) {
    var space = getSpace(options.titleSpace);
    if (options.titleColor && options.titleUnderlined) {
        return "" + space + chalk_1.default.underline[options.titleColor](options.title);
    }
    if (options.titleColor && !options.titleUnderlined) {
        return "" + space + chalk_1.default[options.titleColor](options.title);
    }
    if (!options.titleColor && options.titleUnderlined) {
        return "" + space + chalk_1.default.underline(options.title);
    }
    return "" + space + options.title;
}
function getMessage(message, options) {
    var space = getSpace(options.messageSpace);
    if (options.messageColor && options.messageUnderlined) {
        return "" + space + chalk_1.default.underline[options.messageColor](message);
    }
    if (options.messageColor && !options.messageUnderlined) {
        return "" + space + chalk_1.default[options.messageColor](message);
    }
    if (!options.messageColor && options.messageUnderlined) {
        return "" + space + chalk_1.default.underline(message);
    }
    return "" + space + message;
}
function printColoredLog(message, variable, options) {
    if (variable === void 0) { variable = null; }
    var icon = options.icon ? getIcon(options) : '';
    var title = options.title ? getTitle(options) : '';
    var msg = getMessage(message, options);
    if (variable)
        log("" + icon + title + msg + ":", variable);
    else
        log("" + icon + title + msg);
}
var PrettyLog = /** @class */ (function () {
    function PrettyLog() {
    }
    PrettyLog.prototype.info = function (msg, variable, options) {
        if (variable === void 0) { variable = null; }
        if (options === void 0) { options = {
            icon: 'info',
            iconColor: 'blue',
            title: 'info',
            titleColor: 'blue',
        }; }
        printColoredLog(msg, variable, options);
    };
    PrettyLog.prototype.success = function (msg, variable, options) {
        if (variable === void 0) { variable = null; }
        if (options === void 0) { options = {
            icon: 'tick',
            iconColor: 'green',
            title: 'success',
            titleColor: 'green',
        }; }
        printColoredLog(msg, variable, options);
    };
    PrettyLog.prototype.warn = function (msg, variable, options) {
        if (variable === void 0) { variable = null; }
        if (options === void 0) { options = {
            icon: 'warning',
            iconColor: 'yellow',
            title: 'warn',
            titleColor: 'yellow',
        }; }
        printColoredLog(msg, variable, options);
    };
    PrettyLog.prototype.error = function (msg, variable, options) {
        if (variable === void 0) { variable = null; }
        if (options === void 0) { options = {
            icon: 'cross',
            iconColor: 'red',
            title: 'error',
            titleColor: 'red',
        }; }
        printColoredLog(msg, variable, options);
    };
    PrettyLog.prototype.custom = function (msg, variable, options) {
        if (variable === void 0) { variable = null; }
        printColoredLog(msg, variable, options);
    };
    return PrettyLog;
}());
exports.default = new PrettyLog();
