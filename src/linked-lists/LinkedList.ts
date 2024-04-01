import { SimpleNode } from "./ListNode";
import { List } from "./List";

export class LinkedList<T> extends List<T> {
    protected _head: SimpleNode<T> | null;

    constructor() {
        super();
        this._head = null;
    }

    public insert(value: T): void {
        const newListNode = new SimpleNode(value);
        this._size++;
        if (this._head === null) {
            this._head = newListNode;
        }
        else {
            let current = this._head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newListNode;
        }
    }

    public exist(value: T): boolean {
        let current = this._head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    public find(predicate: (value: T, index: number) => boolean): T | null {
        let current = this._head;
        let index = 0;
        while (current !== null) {
            if (predicate(current.value, index)) return current.value;
            current = current.next;
            index++;
        }
        return null;
    }

    /**
     * Finds the node that matches the predicate and the node that precedes it.
     * @param predicate Callback function to find the node.
     * @returns Object with the finded node and the previous node.
     */
    private findNode(predicate: (value: T, index: number) => boolean): { finded: SimpleNode<T>, previous: SimpleNode<T> | null } | null {
        let index = 0;
        let toEvaluate: SimpleNode<T> | null = this._head;
        let previous: SimpleNode<T> | null = null;
        while (toEvaluate !== null) {
            if (predicate(toEvaluate.value, index)) {
                return { finded: toEvaluate, previous }
            }
            previous = toEvaluate;
            toEvaluate = toEvaluate.next;
            index++;
        }
        return null;
    }

    public remove(predicate: (value: T, index: number) => boolean): void {
        if (this._head === null) return; // List is empty
        const result = this.findNode(predicate);
        if (!result) return; // Node not found
        const { finded, previous } = result;
        // List has only one element
        if (previous === null) {
            this._head = null;
            this._size = 0;
            return;
        }
        /**
         * Remove the element from the list.
         * The previous node should point to the next node of the finded node(node to delete).
         */
        previous.next = finded.next;
        this._size--;
    }

    public forEach(callback: (value: T, index: number) => void): void {
        let current = this._head;
        let index = 0;
        while (current !== null) {
            callback(current.value, index);
            current = current.next;
            index++;
        }
    }

    public map<U>(callback: (value: T, index: number) => U): LinkedList<U> {
        const newList = new LinkedList<U>();
        let current = this._head;
        let index = 0;
        while (current !== null) {
            newList.insert(callback(current.value, index));
            current = current.next;
            index++;
        }
        return newList;
    }
}