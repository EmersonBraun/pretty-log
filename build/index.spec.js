"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
describe('Test Pretty Log', function () {
    test('Test info withouth var', function () {
        var val = index_1.default.info('test info');
        expect(val).toBe(true);
    });
    test('Test info with var', function () {
        var val = index_1.default.info('test info', 'hello word');
        expect(val).toBe('hello word');
    });
    test('Test success withouth var', function () {
        var val = index_1.default.success('test success');
        expect(val).toBe(true);
    });
    test('Test success with var', function () {
        var val = index_1.default.success('test success', 'hello word');
        expect(val).toBe('hello word');
    });
    test('Test warn withouth var', function () {
        var val = index_1.default.warn('test warn');
        expect(val).toBe(true);
    });
    test('Test warn with var', function () {
        var val = index_1.default.warn('test warn', 'hello word');
        expect(val).toBe('hello word');
    });
    test('Test error withouth var', function () {
        var val = index_1.default.error('test error');
        expect(val).toBe(true);
    });
    test('Test error with var', function () {
        var val = index_1.default.error('test error', 'hello word');
        expect(val).toBe('hello word');
    });
    test('Test custom withouth var', function () {
        var val = index_1.default.custom('teste custom', null, {
            iconColor: 'white',
            icon: 'bullet',
        });
        expect(val).toBe(true);
    });
    test('Test custom with var', function () {
        var val = index_1.default.custom('test custom', 'hello word', {
            iconColor: 'white',
            icon: 'bullet',
        });
        expect(val).toBe('hello word');
    });
});
