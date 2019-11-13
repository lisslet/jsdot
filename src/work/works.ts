interface Thenable<T = any> {
    callbacks: any[];
    feedbacks: any[];

    then(callback: (response: T) => Thenable): Thenable;

    catch(feedback: (error?: Error) => any): Thenable;
}

export class Works {
    protected _worker;

    protected _index = 0;
    protected _executors: { [key: number]: [any, any] } = {};

    static by(worker: Worker);
    static by(worker) {
        return new Works(worker);
    }

    constructor(worker: Worker);
    constructor(worker) {
        this._worker = worker;

        worker.onmessage = function (message) {
            const {data} = message;
            if (!message.hasOwnProperty('id')) {
                throw new TypeError(`Cannot found worker request id`);
            }

            const {id} = data;

            let body = data.body;

            const {_executors} = this;
            if (!_executors.hasOwnProperty(id)) {
                throw new TypeError(`Cannot found request`);
            }

            const _executor = _executors[id];
            _executor[0](body);
        }
    }

    from<RES = any>(type: string): Work<RES>
    from(type) {
        return new Work(this, type);
    }


    request(type, body) {

        const id = this._index++;

        return new Promise((resolve, reject) => {
            this._executors[id] = [resolve, reject];
            this._worker.postMessage({
                id,
                type,
                body
            });
        });
    }
}


class Work<RES = any> {
    protected _works: Works;

    type: string;

    constructor(works: Works, type: string)
    constructor(works, type) {
        this._works = works;
        this.type = type;
    }

    with(body: any): Promise<RES>;
    with(body) {
        return this._works.request(this.type, body);
    }
}

class ChartWorks {
    works = Works.by(new Worker('./chart-worker'));

    $convert = this.works.from('convert');

    test() {
        this.$convert.with({})
            .then(response => {
                console.log(response);
            })
    }
}