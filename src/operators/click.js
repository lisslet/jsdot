import {$event} from './on.js';

export function $click(method) {
	return $event('click', method);
}