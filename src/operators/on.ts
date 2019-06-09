import {Dot} from '../core/dot.js';
import {DotEvent} from '../core/dot-event.js';
import {EVENT_SHORTEN_TYPES} from './event.js';


export function $on(type, method) {
	type   = EVENT_SHORTEN_TYPES[type] || type;

	const interceptedMethod = intercept(method);
	method._dotInterceptedMethod = interceptedMethod;

	return function () {
		return this.set(setter, [type, interceptedMethod]);
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