export function $append(elements) {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }

    return function () {
        return this.set(
            this.length > 1 ?
                appends :
                append,
            [elements]
        );
    };
}

function appends(elements) {
    let current = elements.length;
    while (current-- > 0) {
        this.appendChild(elements[current].cloneNode(true));
    }
}

function append(elements) {
    let current = elements.length;
    while (current-- > 0) {
        this.appendChild(elements[current]);
    }
}