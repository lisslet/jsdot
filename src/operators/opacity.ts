import {$css, css$} from './css.js';


export function $opacity(opacity: number);
export function $opacity(opacity) {
    return $css('opacity', opacity);
}

export function opacity$() {
    return css$('opacity');
}