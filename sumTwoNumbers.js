// "Функция сложения двух чисел:
// sum(1)(2) //3"

const sum = (num) => {

  return function (secondNum) {
    if (typeof (num) !== "number" || typeof (secondNum) !== "number") {
      throw new Error('Введите число!')
    } else {
      return num + secondNum;
    }
  }
};