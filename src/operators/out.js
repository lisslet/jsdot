import {$event} from './event.js';

export function $out(method){
	return $event('out', method);
}