export class Works {
    constructor(path) {
        this._path = path;
    }
    connect() {
        this._worker = new Worker(this._path);
        this.connect = () => null;
    }
    job(type) {
        this.connect();
        return new Work(this, type);
    }
    post(type, data) {
        this._worker.postMessage({
            type,
            data
        });
    }
}
export class Work {
    constructor(works, type) {
        this._worker = works;
        this._type = type;
    }
    request(data) {
        this._worker.post(this._type, data);
    }
}
