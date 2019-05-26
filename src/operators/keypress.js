import {$event} from './on.js';

export function press(method) {
	return $event('press', method);
}