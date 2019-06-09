export function $before(elements) {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }

    return function () {
        return this.set(
            this.length > 1 ?
                befores :
                before,
            [elements]
        );
    };
}

function befores(elements) {
    let current = elements.length;
    while (current-- > 0) {
        this.parentNode.insertBefore(elements[current].cloneNode(true), this);
    }
}

function before(elements) {
    let current = elements.length;
    while (current-- > 0) {
        this.parentNode.insertBefore(elements[current], this);
    }
}