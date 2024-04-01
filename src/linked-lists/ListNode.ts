export class ListNode<T> {
    protected _value: T;
    protected _next: ListNode<T> | null;

    constructor(value: T) {
        this._value = value;
        this._next = null;
    }

    set value(value: T) { this._value = value; }
    get value(): T { return this._value; }

    set next(next: ListNode<T> | null) { this._next = next; }
    get next(): ListNode<T> | null { return this._next; }
}