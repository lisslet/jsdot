import { $on } from './on.js';
export function $ready(method) {
    return $on('ready', method);
}
