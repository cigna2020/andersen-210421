// "Функция, которая возвращает новый массив из общих элементов двух массивов
// const a = [1, 2, 3, 4, 5];
// const b = [1, 3, 6, 3, 1, 4, 7];
// fn(a, b) //[1,3,4]"

const fn = (a, b) => {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    const commonForArraysValue = b.includes(a[i]) && !result.includes(a[i]);
    if (commonForArraysValue) result.push(a[i]);
  }

  return result;
}