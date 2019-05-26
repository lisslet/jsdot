import {PipeBase} from './pipe-base.js';

export class Dot extends PipeBase<Dot> {
    constructor(selector: string);
    constructor(nodes: Array<Element>);
    constructor(parents: Array<Element>, selector: string)
    constructor(parents, selector?) {
        super();
        if (!selector) {
            selector = parents;
            parents = [document];
        }


        const nodes = typeof selector === 'string' ?
            getNodes(parents, selector) :
            selector;

        this.nodes = nodes;

        let length = this.nodes.length;
        this.length = length;

        while (length-- > 0) {
            this[length] = nodes[length];
        }
    }

    nodes: Array<Element>;
    length = 0;

    get(method, args) {
        let requestLength = method.length;

        if (args) {
            requestLength -= args.length;
        }

        const {nodes} = this;
        const result = [];
        const end = this.length;
        let key = -1;

        switch (requestLength) {
            case 1:
                return method.apply(nodes[key], args);
            default:
                while (++key < end) {
                    result.push(method.apply(nodes[key], args));
                }
        }

        return result;
    }

    set(method, args) {
        this.get(method, args);
        return this;
    }

    debug() {
        this.nodes.forEach(logger);
    }
}

export function dot(selector: string): Dot;
export function dot(nodes: Array<Element>): Dot;
export function dot(parents: Array<Element>, selector: string): Dot;
export function dot(parents, selector?) {
    return new Dot(parents, selector);
}

function getNodes(parents: Array<Element>, selector: string): Array<Element>;
function getNodes(parents, selector) {

    return parents.reduce((nodes, parent) => {
        return nodes.concat(Array.from(parent.querySelectorAll(selector)));
    }, []);
}

function logger(target) {
    console.log(target);
}