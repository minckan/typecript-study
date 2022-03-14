/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

type Commands = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder'

function calculate(command: Commands, num1: number, num2: number) :number{
    let result: number;
    switch (command) {
        case 'add':
            return result = num1 + num2
        case 'substract':
            return result = num1 - num2
        case 'multiply':
            return result = num1 * num2
        case 'divide':
            return result = num1 / num2
        case 'remainder':
            return result = num1 % num2
        default:
            throw new Error('unknown error')
    }
}