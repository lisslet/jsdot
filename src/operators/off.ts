import {EVENT_SHORTEN_TYPES} from './event';

export function $off(type, method) {
	type = EVENT_SHORTEN_TYPES[type] || type;

	const interceptedMethod = method['_dotInterceptedMethod'];
	return function () {
		return this.set(setter, [type, interceptedMethod]);
	}
}

function setter(type, method) {
	this.removeEventListener(type, method);
}