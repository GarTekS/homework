function greet(name) {
  return `Hello ${name}`
}

console.log(greet("Alice"))

// ================

const numbers = [4, 15, 8, 42, 7, 3, 19]

function logNumbersGreaterThanTen(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i])
        }
    }
}

logNumbersGreaterThanTen(numbers)

// ===========

function calculate(num1, num2, operator) {
    if (operator === 'plus') {
        return num1 + num2;
    } else if (operator === 'minus') {
        return num1 - num2;
    } else if (operator === 'multiply') {
        return num1 * num2;
    } else if (operator === 'divide') {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return 'Error: Division by zero!'
        }
    } else {
        return 'Error: Invalid operator!'
    }
}


const result = calculate(100, 3, 'plus')
console.log(result)


// =================


const users = [
    {
        name: 'alex',
        age: 23,
        isAdmin: false,
        city: 'Moscow'
    },
    {
        name: 'john',
        age: 30,
        isAdmin: true,
        city: 'Moscow'
    },
]

users.push({
    name: 'ivan',
    age: 69,
    isAdmin: true,
    region: 'Vinland'
})

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

const foo = 'hello world'
console.log(foo.toUpperCase());
