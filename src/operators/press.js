import { $on } from './on.js';
export function $press(method) {
    return $on('press', method);
}
