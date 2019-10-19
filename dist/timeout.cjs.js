'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ms = _interopDefault(require('ms'));

const say = (name = 1) => {
    return name
};

const pA = () => {
    return new Promise((reslove) => {
        reslove();
    })
};

function howLongUntilLunch(hours, minutes) {
	let name = say();
	console.log(name);
	pA();

	return ms(Date.now(), { long: true });
}

module.exports = howLongUntilLunch;
