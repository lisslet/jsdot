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
}

export class Api<PARAMS, RESPONSE, BODY> implements ApiMethods {
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


}