'use static';
(function () {
	/**
	 *
	 * @param {Function} executor
	 * @constructor
	 */
	function PromiseShim(executor) {
		this['[[PromiseStatus]]'] = 'pending';

		const _this = this;
		setTimeout(function () {
			function resolve(onFulfilled) {
				_this._resolve(onFulfilled);
			}

			executor(resolve, _this._reject);
		});
	}

	PromiseShim.prototype.length = 1;

	PromiseShim.prototype._thens = [];

	PromiseShim.prototype._catch = null;

	PromiseShim.prototype._finally = null;

	PromiseShim.prototype._resolve = function PromiseResolver(fulfilled) {
		this['[[PromiseValue]]'] = fulfilled;
		this['[[PromiseStatus]]'] = 'resolved';
		var thens = this._thens;

		try {
			while (thens.length) {
				(thens.shift())(fulfilled);
			}
		} catch (error) {
			if (this._catch) {
				this._catch(error);
			}
		}
	};

	PromiseShim.prototype._reject = function PromiseResolver(rejected) {
		this['[[PromiseValue]]'] = rejected;
		this['[[PromiseStatus]]'] = 'rejected';
		throw new Error('(in promise)');
	};

	PromiseShim.prototype.then = function PromiseThen(onFulfilled) {
		this._thens.push(onFulfilled);
		return this;
	};

	PromiseShim.prototype.catch = function PromiseCatch(onRejected) {
		this._catch = onRejected;
		return this;
	};

	PromiseShim.prototype.finally = function PromiseFinally(onFinally) {
		this._finally = onFinally;
		return this;
	};

	PromiseShim.all = function PromiseAll() {

	};

	PromiseShim.race = function PromiseRace() {

	};

	PromiseShim.reject = function PromiseReject(rejected) {
		return new PromiseShim(function (resolve, reject) {
			reject(rejected);
		});
	};

	PromiseShim.resolve = function PromiseResolve(fulfilled) {
		return new PromiseShim(function (resolve, reject) {
			resolve(fulfilled);
		});
	};

	Promise = PromiseShim;

	function increase(value) {
		return new Promise(function (resolve) {
			console.log(value);
			return resolve(value + 1);
		});
	}

	var promise = new Promise(function (resolve, reject) {
		return resolve(Promise.resolve(1));
	});

	promise.then(increase)
		.then(increase)
		.then(increase);
})();