import {Dot} from '../core/dot.js';
import {DotGetter} from '../types.js';


export function query$(selector: string): DotGetter;
export function query$(selector) {
    return function () {
        return new Dot(this.get(getter, [selector, []]).flat());
    }
}

function getter(selector) {
    return Array.from(this.querySelectorAll(selector));
}