import { PipeBase } from './pipe-base.js';
class EventSetter {
}
export class Dot extends PipeBase {
    constructor(parents, selector) {
        super();
        this.length = 0;
        if (!selector) {
            selector = parents;
            parents = [document];
        }
        const nodes = selector instanceof Dot ?
            selector.nodes :
            typeof selector === 'string' ?
                getNodes(parents, selector) :
                Array.isArray(selector) ?
                    selector :
                    [selector];
        this.nodes = nodes;
        let length = this.nodes.length;
        this.length = length;
        while (length-- > 0) {
            this[length] = nodes[length];
        }
    }
    get(method, args = []) {
        let requestLength = method.length;
        if (args) {
            requestLength -= args.length;
        }
        const { nodes } = this;
        const result = [];
        const end = this.length;
        let key = -1;
        if (method.length - args.length < 1) {
            if (requestLength === 1) {
                return method.apply(nodes[key], args);
            }
            else {
                while (++key < end) {
                    result.push(method.apply(nodes[key], args));
                }
            }
        }
        else {
            if (requestLength === 1) {
                args.unshift(nodes[0]);
                return method.apply(dot(nodes[0]), args);
            }
            else {
                args.unshift(null);
                while (++key < end) {
                    args[0] = nodes[key];
                    result.push(dot(nodes[key]), args);
                }
            }
        }
        return result;
    }
    set(method, args = []) {
        this.get(method, args);
        return this;
    }
    debug() {
        this.nodes.forEach(logger);
    }
}
export function dot(parents, selector) {
    return new Dot(parents, selector);
}
function getNodes(parents, selector) {
    return parents.reduce((nodes, parent) => {
        return nodes.concat(Array.from(parent.querySelectorAll(selector)));
    }, []);
}
function logger(target) {
    console.log(target);
}
