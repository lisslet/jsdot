export function $prepend(elements) {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }
    return function () {
        return this.set(this.length > 1 ?
            prepends :
            prepend, [elements]);
    };
}
function prepends(elements) {
    let firstChild = this.childNodes[0];
    let current = elements.length;
    if (!firstChild) {
        this.appendChild(elements[--current].cloneNode(true));
    }
    while (current-- > 0) {
        this.insertBefore(elements[current].cloneNode(true), this.childNodes[0]);
    }
}
function prepend(elements) {
    let firstChild = this.childNodes[0];
    let current = elements.length;
    if (!firstChild) {
        this.appendChild(elements[--current]);
    }
    while (current-- > 0) {
        this.insertBefore(elements[current], this.childNodes[0]);
    }
}
