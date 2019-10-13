import { Dot } from '../core/dot';
export function clone$() {
    return function () {
        return new Dot(this.get(getter));
    };
}
function getter() {
    return this.cloneNode(true);
}
