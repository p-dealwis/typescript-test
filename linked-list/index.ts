/**
 * Linked List
 */

class Node<T> {
    private value: T
    private next: Node<T> | undefined
    private prev: Node<T> | undefined

    constructor(value: T) {
        throw Error('Not implemented')
    }

    public getNext(): Node<T> | undefined {
        throw Error('Not implemented')
    }

    public setNext(newNext: Node<T> | undefined): void {
        throw Error('Not implemented')
    }

    public getPrev(): Node<T> | undefined {
        throw Error('Not implemented')
    }

    public setPrev(newPrev: Node<T> | undefined): void {
        throw Error('Not implemented')
    }

    public getValue(): T {
        throw Error('Not implemented')
    }
}

export class LinkedList<TElement> {
    head: Node<TElement>
    tail: Node<TElement>

    public push(element: unknown) {
        throw Error('Not implemented')
    }

    public pop(): unknown {
        throw Error('Not implemented')
    }

    public shift(): unknown {
        throw Error('Not implemented')
    }

    public unshift(element: unknown) {
        throw Error('Not implemented')
    }

    public delete(element: unknown) {
        throw Error('Not implemented')
    }

    public count(): unknown {
        throw Error('Not implemented')
    }
}
