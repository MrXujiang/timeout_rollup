import ms from 'ms';

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

export default howLongUntilLunch;
