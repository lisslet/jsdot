import {Dot} from '../classes/dot.js';
import {DotEvent} from '../classes/dot-event.js';

const shortenType = {
	'ready' : 'DOMContentLoaded',
	'double': 'dbclick',
	'over'  : 'mouseover',
	'out'   : 'mouseout',
	'up'    : 'keyup',
	'down'  : 'keydown',
	'press' : 'keypress',
	'^ani'  : 'animationstart',
	'ani$'  : 'animationend'
};

export function $event(type, method) {
	type   = shortenType[type] || type;
	method = intercept(method);
	return function () {
		return this.set(setter, [type, method]);
	};
}

function setter(type, method) {
	this.addEventListener(type, method);
}

function intercept(method) {
	return function (event) {
		switch (method.length) {
			case 2:
				method.call(new Dot(this), new DotEvent(event), this);
				break;
			case 1:
				method.call(this, new DotEvent(event));
				break;
			default:
				method.call(this);
		}
	};
}