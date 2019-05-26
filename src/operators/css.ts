import {PropSetter, PropStrGetter} from '../types';

const shortenProperties = {
    bg: 'background',
    bgc: 'background-color',
    bd: 'border',
    bds: 'border-style',
    bdw: 'border-width',
    bdr: 'border-radius',
    radius: 'border-radius',
};


export function $css(property:string, value:string | number): PropSetter;
export function $css(property, value) {
    property = shortenProperties[property] || property;

    return function () {
        return this.set(setter, [property, value]);
    };
}

export function css$(property: string): PropStrGetter;
export function css$(property) {
    property = shortenProperties[property] || property;

    return function () {
        return this.get(getter, [property]);
    };
}

function getter(property) {
    return this.style[property];
}

function setter(property, value) {
    this.style[property] = value;
}