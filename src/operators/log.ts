import {Dot} from '../core/dot.js';

export const $log = setter;

export function setter() {
	if (this instanceof Dot) {
		this.set(set);
	} else {
		console.log(this);
	}
}

function set() {
	console.log(this);
}