export abstract class List<T> {
    protected _size: number;

    constructor() {
        this._size = 0;
    }

    get size(): number { return this._size; }

    public abstract exist(value: T): boolean;

    public abstract find(predicate: (value: T, index: number) => boolean): T | null;

    public abstract remove(predicate: (value: T, index: number) => boolean): void;

    public abstract forEach(callback: (value: T, index: number) => void): void;

    public abstract map<U>(callback: (value: T, index: number) => U): List<U>;
}