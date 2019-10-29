export class Works {
    protected _worker: Worker;

    static by(_worker: Worker)
    static by(_worker) {
        return new Works(_worker);
    }

    constructor(_worker: Worker);
    constructor(_worker) {
        this._worker = _worker;

        _worker.onmessage = function(message){
            console.log(message);
        }
    }

    request(type, data) {
        this._worker.postMessage({
            type,
            data
        });
    }

    do(type: string)
    do(type) {
        return new Work(this, type);
    }

}

export class Work {
    protected _type: string;
    private _works: Works;

    constructor(works: Works, type: string)
    constructor(works, type) {
        this._works = works;
        this._type = type;
    }

    request(data) {
        this._works.request(this._type, data);
    }
}


