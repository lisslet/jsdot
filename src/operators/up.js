import { $on } from './on.js';
export function $up(method) {
    return $on('up', method);
}
