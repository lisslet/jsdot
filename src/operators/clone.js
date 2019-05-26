import {Dot} from '../classes/dot.js';

export function clone$() {
	return function () {
		return new Dot(this.get(getter));
	};
}

function getter() {
	return this.cloneNode(true);
}