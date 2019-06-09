import {BoolGetters, NumGetters, Setter, Setters, StrGetters} from '../types';


export abstract class PipeBase<Self> {

    pipe(a: BoolGetters): Boolean[];
    pipe(a: any, b: BoolGetters): Boolean[];
    pipe(a: any, b: any, c: BoolGetters): Boolean[];
    pipe(a: any, b: any, c: any, d: BoolGetters): Boolean[];
    pipe(a: any, b: any, c: any, d: any, e: BoolGetters): Boolean[];

    pipe(a: NumGetters): number[];
    pipe(a: any, b: NumGetters): number[];
    pipe(a: any, b: any, c: NumGetters): number[];
    pipe(a: any, b: any, c: any, d: NumGetters): number[];
    pipe(a: any, b: any, c: any, d: any, e: NumGetters): number[];

    pipe(a: StrGetters): string[];
    pipe(a: any, b: StrGetters): string[];
    pipe(a: any, b: any, c: StrGetters): string[];
    pipe(a: any, b: any, c: any, d: StrGetters): string[];
    pipe(a: any, b: any, c: any, d: any, e: StrGetters): string[];
    /*
    pipe(a: ObjectGetter): {}[];
    pipe(a: any, b: ObjectGetter): {}[];
    pipe(a: any, b: any, c: ObjectGetter): {}[];
    pipe(a: any, b: any, c: any, d: ObjectGetter): {}[];
    pipe(a: any, b: any, c: any, d: any, e: ObjectGetter): {}[];
    */

    pipe(a: Setter<Self>): Self;
    pipe(a: Setter<Self>, ...more: Setters<Self>[]): Self;
    pipe(operator): any;

    pipe(operator): any {
        let result = this;
        let key = -1;
        const end = arguments.length;
        while (++key < end) {
            result = arguments[key].call(result) || result;
        }
        return result;
    }
}