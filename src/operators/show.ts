import {Setter} from '../types';
import {Dot} from '../core/dot.js';

export function $show(): Setter<Dot>;
export function $show() {
	return setter;
}

function setter() {
	return this.set(set);
}

function set() {
	this.style.display = 'inherit';
}