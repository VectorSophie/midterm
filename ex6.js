"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randTime = exports.promiseAllSettled = void 0;
//6
var promiseAllSettled = function (arr) {
    var promiseArr = [];
    return new Promise(function (resolve) {
        arr.forEach(function (promise, idx) {
            return promise
                .then(function (res) {
                promiseArr[idx] = { status: 'fulfilled', value: res };
            })
                .catch(function (err) {
                promiseArr[idx] = { status: 'rejected', reason: err };
            })
                .finally(function () {
                if (promiseArr.length === arr.length)
                    resolve(promiseArr);
            });
        });
    });
};
exports.promiseAllSettled = promiseAllSettled;
var randTime = function (val) {
    return new Promise(function (resolve) { return setTimeout(resolve, Math.random() * 1000, val); });
};
exports.randTime = randTime;
