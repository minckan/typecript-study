{
    interface Stack<T> {
        readonly size: number;
        push(value: T): void;
        pop(): T;
    }

    type StackNode<T> = {
        readonly value: T;
        readonly next ?: StackNode<T> // === StackNode | undefined
    }

    class Stack_Imple<T> implements Stack<T>{
        constructor(private capacity : number) {}

        private _size: number = 0;
        private head?: StackNode<T>;

        get size() {
            return this._size
        }

        push(value: T) {
            if (this.size === this.capacity) {
                throw new Error('Stack is Full!')
            }
            const node = { value, next: this.head }
            this.head = node;
            this._size++
        }
        pop(): T { // null == undefined , null !== undefined
            if (this.head == null) {
                throw new Error('Stack is Empty!')
            }
            const node = this.head
            this.head = node.next

            this._size-- 
            return node.value
        }
    }

    const stack = new Stack_Imple<string>(10)
    stack.push('MJ 1')
    stack.push('KW 2')
    stack.push('MK 3')
    const stack2 = new Stack_Imple<number>(10)
    stack2.push(123)
    stack2.push(456)
    stack2.push(789)

    while (stack.size !== 0) {
        console.log(stack.pop());
    }
}