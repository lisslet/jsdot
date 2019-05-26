import {ListGetter} from '../types';

export function $class(className, ...more) {
    return this.set(setter, Array.from(arguments));
}

export const class$: ListGetter = get;

function setter(classNames) {
    this.classList.add.apply(this, classNames);
}

function getter() {
    return this.classList;
}

function get(){
    return this.get(getter);
}