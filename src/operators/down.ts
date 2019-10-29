import {$on} from './on.js';

export function $down(method) {
	return $on('down', method);
}