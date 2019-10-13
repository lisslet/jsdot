import { $on } from './on.js';
export function $click(method) {
    return $on('click', method);
}
