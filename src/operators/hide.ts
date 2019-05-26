import {Setter} from '../types';


function set() {
	this.style.display = 'none';
}

function setter(){
	return this.set(set);
}

export function $hide():Setter;
export function $hide() {
	return setter;
}
