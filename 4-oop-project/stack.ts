interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

type StackNode = {
    readonly value: string;
    readonly next ?: StackNode // === StackNode | undefined
}

class Stack_Imple implements Stack{
    constructor(private capacity : number) {}

    private _size: number = 0;
    private head?: StackNode;

    get size() {
        return this._size
    }

    push(value: string) {
        if (this.size === this.capacity) {
            throw new Error('Stack is Full!')
        }
        const node: StackNode = { value, next: this.head }
        this.head = node;
        this._size++
    }
    pop(): string { // null == undefined , null !== undefined
        if (this.head == null) {
            throw new Error('Stack is Empty!')
        }
        const node = this.head
        this.head = node.next

        this._size-- 
        return node.value
    }
}

const stack = new Stack_Imple(10)
stack.push('MJ 1')
stack.push('KW 2')
stack.push('MK 3')

while (stack.size !== 0) {
    console.log(stack.pop());
}