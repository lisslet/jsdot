type ThenableCallback = (response?) => any;
type ThenableFeedback = (error?) => any;

export class Thenable {
    protected _callbacks;
    protected _feedbacks;
    protected _final: () => any;

    protected _resolver: () => any;

    constructor(resolver) {
        this._resolver = resolver;
    }

    then(callback) {
        this.then = this._thenWithoutResolver;

        const {_resolver} = this;
        if (_resolver) {
            _resolver();
        }

        return this._thenWithoutResolver(callback);
    }

    protected _thenWithoutResolver(callback){
        this._callbacks.push(callback);
        return this;
    }

    catch(feedback) {
        this._feedbacks.push(feedback);
        return this;
    }

    final(callback) {
        this.final = callback;
    }

    resolve(resolve) {
        const {_callbacks} = this;
        if (!_callbacks) {
            return;
        }

        _callbacks.some(callback => {
            try {
                resolve = callback(resolve);
            } catch (error) {
                return this.reject(error);
            }
        });
    }

    reject(error) {
        const {_feedbacks, _final} = this;
        if (!_feedbacks) {
            console.warn(error);
            if (_final) {
                _final();
            }
            return true;
        }
        _feedbacks.forEach(feedback => {
            feedback(error);
        })
        if (_final) {
            _final();
        }

        return true;
    }
}