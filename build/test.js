"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
var hello = 'hello world';
index_1.default.info('test info');
index_1.default.info('test info with var', hello);
index_1.default.success('teste success');
index_1.default.success('teste success with var', hello);
index_1.default.warn('teste warn');
index_1.default.warn('teste warn with var', hello);
index_1.default.error('teste error');
index_1.default.error('teste error with var', hello);
index_1.default.custom('teste custom', null, {
    iconColor: 'white',
    icon: 'bullet',
});
index_1.default.custom('teste custom with var', hello, {
    iconColor: 'white',
    icon: 'bullet',
});
