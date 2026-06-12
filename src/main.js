console.log('#5. JavaScript homework example file')

/*
 * #1
 *
 * Створіть функцію counter(), яка має реалізувати лічильник за допомогою замикання:
 * функція може приймати число як аргумент counter(n)
 * якщо число передано у функцію — лічба починається із зазначеного числа
 * якщо ні — то лічба триває
 */

const counter = (function() {
  let count = 0

  return function(num = null) {
    count = num ?? count

    return count++
  }
}())

console.log(counter()) // 0
console.log(counter()) // 1
console.log(counter(100)) // 100
console.log(counter()) // 101
console.log(counter()) // 102
console.log(counter(500)) // 500
console.log(counter()) // 501
console.log(counter()) // 502
console.log(counter(0)) // 0
console.log(counter()) // 1
console.log(counter()) // 2

/*
 * #2
 *
 * Створіть об'єкт counterFactory, який має реалізувати три методи за допомогою замикання:
 * початкове значення лічильника — 0
 * counterFactory.value() — повертає значення лічильника
 * counterFactory.value(n) — встановлює значення лічильника, повертає нове значення
 * counterFactory.increment() — збільшує значення лічильника на 1
 * counterFactory.decrement() — зменшує значення лічильника на 1
 */

const counterFactory = (function() {
  let count = 0

  return {
    value(num) {
      if (num !== undefined) count = num

      return count
    },
    decrement() {
      count--
    },
    increment() {
      count++
    }
  }
}())

console.log(counterFactory.value()) // 0
counterFactory.increment()
counterFactory.increment()
counterFactory.increment()
console.log(counterFactory.value()) // 3
counterFactory.decrement()
counterFactory.decrement()
console.log(counterFactory.value()) // 1
console.log(counterFactory.value(100)) // 100
counterFactory.decrement()
console.log(counterFactory.value()) // 99
console.log(counterFactory.value(200)) // 200
counterFactory.increment()
console.log(counterFactory.value()) // 201

/*
 * #3
 *
 * Створіть функцію myPow(a, b, myPrint). Всередині реалізуйте рекурсію для підрахунку результату піднесення числа a до степеня b.
 * — Функція myPrint(a, b, res) — глобальна функція, яка має генерувати із параметрів a, b, res рядок вигляду 'a^b=res' і повертати його.
 * — myPrint() має бути передана в myPow() як параметр і викликана всередині як callback-функція.
 * — функція myPow() повертає результат виклику callback-функції.
 * Наприклад:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 * console.log(myPow(2, 0, myPrint))  // 2^0=1
 * console.log(myPow(2, -2, myPrint)) // 2^-2=0.25
 */

const myPrint = (a, b, res) => `${a}^${b}=${res}`

const myPow = (a, b, callback) => {
  const pow = (x, n) => {
    if (n === 0) return 1 // Умова для n === 0
    if (n < 0) return 1 / pow(x, -n) // Додавання умови для від'ємних степенів
    return x * pow(x, n - 1) // Рекурсивний випадок для позитивних степенів
  }

  return callback(a, b, pow(a, b))
}

console.log(myPow(3, 4, myPrint)) // 3^4=81
console.log(myPow(2, 3, myPrint)) // 2^3=8
console.log(myPow(2, 0, myPrint)) // 2^0=1
console.log(myPow(2, -2, myPrint)) // 2^-2=0.25


/*
 * #4
 * Створіть функцію myMax(arr), яка приймає як параметр
 * довільний числовий масив і повертає максимальне число з переданого їй масиву.
 * У реалізації функції має бути застосовано метод Math.max() і apply().
 */

const list = [12, 23, 100, 34, 56, 9, 233]

const myMax = (arr) => Math.max.apply(Math, arr) // max не залежить від контексту, в apply можна передати як Math, так і null

/*
 * apply — зручний спосіб передати масив даних як параметри функції.
 * Пам'ятайте, Math.max(list) поверне NaN і не буде працювати, оскільки Math.max не приймає масив як вхідний аргумент.
 */

console.log(myMax(list))

/*
 * #5
 *
 * Створіть функцію myMul(a, b), яка буде множити числа а і b, повертаючи результат.
 */

const myMul = (a, b) => a * b

/*
 * Створіть функцію myDouble(n), яка приймає один параметр і подвоює його.
 * Використовувати множення або інші математичні операції всередині функції — заборонено, дозволено використовувати тільки bind() та myMul().
 * Функція повертає результат обчислення.
 */

const myDouble = myMul.bind(null, 2) // контекст фіксуємо null, він не використовується

console.log(myDouble(3)) // = myMul(2, 3) = 6
console.log(myDouble(4)) // = myMul(2, 4) = 8
console.log(myDouble(5)) // = myMul(2, 5) = 10

// Аналогічним чином створіть функцію myTriple(n), яка потроює параметр, який приймає, і повертає результат.
const myTriple = myMul.bind(null, 3) // контекст фіксуємо null, він не використовується

console.log(myTriple(3)) // = myMul(3, 3) = 9
console.log(myTriple(4)) // = myMul(3, 4) = 12
console.log(myTriple(5)) // = myMul(3, 5) = 15

export { counter, counterFactory, myPow, myMax, myMul, myDouble, myTriple }
