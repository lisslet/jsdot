import {$inject} from '../inject.js';

export function $append(elements){
	return $inject('append', elements);
}