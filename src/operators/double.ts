import {$on} from './on.js';

export function $double(method) {
	return $on('double', method);
}