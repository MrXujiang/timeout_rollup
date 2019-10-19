'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const sleep = async function(delay) {
    return new Promise(reslove => {
        setTimeout(() => {
            reslove();
        }, delay);
    })
};

exports.sleep = sleep;
