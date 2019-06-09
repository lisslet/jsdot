import {Dot} from '../core/dot.js';
import {$on} from './on.js';
import {Setter} from '../types';

export function $click(method): Setter<Dot> {
    return $on('click', method);
}