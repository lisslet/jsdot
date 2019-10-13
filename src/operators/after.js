export function $after(elements) {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }
    return function () {
        return this.set(this.length > 1 ?
            afters :
            after, [elements]);
    };
}
function afters(elements) {
    let current = elements.length;
    while (current-- > 0) {
        this.parentNode.insertBefore(elements[current].cloneNode(true), this.nextSibling);
    }
}
function after(elements) {
    let current = elements.length;
    while (current-- > 0) {
        this.parentNode.insertBefore(elements[current], this.nextSibling);
    }
}
