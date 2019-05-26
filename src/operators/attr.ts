import {PropGetter, PropSetter, Stringage} from '../types';

function getter(name) {
	return this.getAttribute(name);
}

function setter(name, value) {
	this.setAttribute(name, value);
}


export function $attr(name: string, value: Stringage): PropSetter;
export function $attr(name, value) {
	return function () {
		return this.set(setter, [name, value]);
	};
}

export function attr$(name: string): PropGetter;
export function attr$(name) {
	return function () {
		return this.get(getter, [name]);
	};
}