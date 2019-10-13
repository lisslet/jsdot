export class Target {
    private _wait: Wait;

    constructor(wait: Wait) {
        this._wait = wait;
    }

    next(value: any);
    next(value) {
        console.log(`waiter next`);
        this._wait.next(value);
    }

    done() {

    }

    error() {

    }
}


export type waiter = (waiter: Target) => any;

export class Wait {
    protected _waiting: waiter;
    private _waited: Waited;

    static for(waiter: waiter);
    static for(waiter) {
        return new Wait(waiter);
    }

    constructor(waiting: waiter) {
        this._waiting = waiting;
    }

    then(then: Function);
    then(then) {
        const waiter = new Target(this);
        this._waiting(waiter);
        const waited = new Waited(then);
        this._waited = waited;
        return waited;
    }

    next(value) {
        console.log('wait next');
        this._waited.next(value);
    }
}

export class Waited {
    private _callback: any;

    constructor(callback) {
        this._callback = callback;
    }

    stop() {

    }

    next(value) {
        console.log('waited next');
        this._callback(value);
    }
}


