import {$event} from './on.js';

export function $keydown(method) {
	return $event('keydown', method);
}