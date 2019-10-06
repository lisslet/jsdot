export class Works {
    _path: string;
    _worker: Worker;

    constructor(path: string) {
        this._path = path;
    }

    protected connect() {
        this._worker = new Worker(this._path);
        this.connect = () => null;
    }

    job<REQUEST_DATA>(type: string) {
        this.connect();
        return new Work(this, type);
    }

    post(type: string, data: any) {
        this._worker.postMessage({
            type,
            data
        });
    }
}

export class Work<REQUEST_DATA = any> {
    _worker: Works;
    _type: string;

    constructor(works: Works, type: string);
    constructor(works, type) {
        this._worker = works;
        this._type = type;
    }

    request(data: REQUEST_DATA) {
        this._worker.post(this._type, data);
    }
}
