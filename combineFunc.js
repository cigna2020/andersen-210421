// "Функция сложения двух чисел:
// sum(1)(2) //3"
// "function add(a, b) {
// return a + b;
// }
// function mul(a, b) {
//   return a \* b;
// }
// console.log(myFunc(add)(1)(2)); //3
// console.log(myFunc(mul)(3)(2)); //6
// Написать функцию myFunc, которая будет работать так"


function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

const myFunc = (func) => {
  return a => b => func(a, b)
}

// console.log(myFunc(add)(1)(2)); //3
// console.log(myFunc(mul)(3)(2)); //6