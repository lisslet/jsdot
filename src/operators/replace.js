export function $replace(elements) {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }
    return function () {
        return this.set(this.length > 1 ?
            replaces :
            replace, [elements]);
    };
}
function replaces(elements) {
    const parent = this.parentNode;
    let current = elements.length;
    while (current-- > 0) {
        parent.replaceChild(elements[current].cloneNode(true), this);
    }
}
function replace(elements) {
    const parent = this.parentNode;
    let current = elements.length;
    while (current-- > 0) {
        parent.replaceChild(elements[current], this);
    }
}
