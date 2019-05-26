import {$inject} from '../inject.js';

export function $before(elements){
	return $inject('before', elements);
}