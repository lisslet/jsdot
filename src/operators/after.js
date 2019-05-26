import {$inject} from '../inject.js';

export function $after(elements){
	return $inject('after', elements);
}