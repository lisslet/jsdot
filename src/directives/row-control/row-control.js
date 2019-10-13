import { dot, Dot } from '../../core/dot.js';
import { $click } from '../../operators/click.js';
import { query$ } from '../../operators/query.js';
const selector = 'data-row-control';
function mixer(tags, attributeName) {
    return tags.map(tag => `${tag}[${attributeName}]`)
        .join(',');
}
export class RowControl extends Dot {
    static forRoot() {
        dot(mixer(['table', 'tbody', 'tr'], selector)).pipe($rowControl());
    }
    constructor(nodes) {
        super(nodes);
        this.set(eventSetter);
        this.pipe(query$(`button[${selector}]`), $click(function (event) {
            console.log('click');
        }));
    }
    add() {
    }
    remove() {
    }
    up() {
    }
    down() {
    }
    indent() {
    }
}
function eventSetter(node) {
    this.pipe($click(function (event) {
        const { target } = event;
        console.log(event);
    }));
}
export function $rowControl() {
    return function () {
        return new RowControl(this.nodes);
    };
}
