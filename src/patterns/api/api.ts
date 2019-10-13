import {ApiOptions, ApiServiceOptions, HttpMethods} from './types';

export interface ApiMethods {
    get();

    post();

    put();

    patch();

    delete();
}

export class ApiService implements ApiMethods {
    protected static _that;

    static that() {
        if (!ApiService._that) {
            ApiService._that = new ApiService();
        }
        return ApiService;
    }

    options(options: ApiServiceOptions) {

    }

    get() {
    }

    delete() {
    }

    patch() {
    }

    post() {
    }

    put() {
    }
}

export class Api<PARAMS, BODY, RESPONSE> implements ApiMethods {
    delete() {
    }

    get() {
    }

    patch() {
    }

    post() {
    }

    put() {
    }

    request(params: PARAMS, options: ApiOptions);
    request(params) {

    }
}