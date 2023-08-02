/**
 * Linked List
 */

class Node<T> {
    private _value: T
    private _next: Node<T> | undefined
    private _prev: Node<T> | undefined

    constructor(value: T) {
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
