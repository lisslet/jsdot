import {Setter} from '../types';
import {Dot} from '../core/dot';


function set() {
	this.style.display = 'none';
}

function setter(){
	return this.set(set);
}

export function $hide():Setter<Dot>;
export function $hide() {
	return setter;
}
