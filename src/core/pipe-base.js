export class PipeBase {
    pipe(operator) {
        let result = this;
        let key = -1;
        const end = arguments.length;
        while (++key < end) {
            result = arguments[key].call(result) || result;
        }
        return result;
    }
}
