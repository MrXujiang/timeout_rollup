import ms from 'ms';
import { say, pA, pB } from './test';

export default function howLongUntilLunch(hours, minutes) {
	let name = say();
	console.log(name);
	pA();
	pB();
	if (hours === undefined) hours = 12;
	if (minutes === undefined) minutes = 30;

	return ms(Date.now(), { long: true });
}