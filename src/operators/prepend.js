import {$inject} from '../inject.js';

export function $prepend(elements){
	return $inject('prepend', elements);
}