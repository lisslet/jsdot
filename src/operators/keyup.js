import {$event} from './on.js';

export function keyup(method) {
	return $event('up', method);
}