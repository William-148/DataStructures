export class ListNode<T> {
    protected _value: T;

    constructor(value: T) {
        this._value = value;
    }

    set value(value: T) { this._value = value; }
    get value(): T { return this._value; }

}

export class SimpleNode<T> extends ListNode<T> {
    protected _next: SimpleNode<T> | null;

    constructor(value: T) {
        super(value);
        this._next = null;
    }

    set next(next: SimpleNode<T> | null) { this._next = next; }
    get next(): SimpleNode<T> | null { return this._next; }

}

export class DoubleNode<T> extends ListNode<T> {
    protected _prev: DoubleNode<T> | null;
    protected _next: DoubleNode<T> | null;

    constructor(value: T) {
        super(value);
        this._prev = null;
        this._next = null;
    }

    set prev(prev: DoubleNode<T> | null) { this._prev = prev; }
    get prev(): DoubleNode<T> | null { return this._prev; }

    set next(next: DoubleNode<T> | null) { this._next = next; }
    get next(): DoubleNode<T> | null { return this._next; }
}