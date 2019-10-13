import { Dot } from '../core/dot.js';
export function query$(selector) {
    return function () {
        return new Dot(this.get(getter, [selector, []]).flat());
    };
}
function getter(selector) {
    return Array.from(this.querySelectorAll(selector));
}
