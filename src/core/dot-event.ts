export class DotEvent {
    constructor(event) {
        this._event = event;
        this.target = event.target;
    }

    _event: Event;
    target: Element;
}