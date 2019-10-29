export type HttpMethods = 'get' | 'post' | 'delete' | 'put' | 'patch';

export interface ApiOptions {
    body: any,

    headers?: {
        [key: string]: string
    }
}

export interface ApiServiceOptions {

}