import {$event} from './event.js';

export function $over(method){
	return $event('over', method);
}