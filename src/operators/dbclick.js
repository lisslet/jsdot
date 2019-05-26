import {$event} from './on.js';

export function $dbclick(method){
	return $event('dbclick', method);
}