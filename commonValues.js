// "Функция, которая возвращает новый массив из общих элементов двух массивов
const b = [1, 2, 3, 4, 5];
const a = [1, 3, 6, 3, 1, 4, 7];
// fn(a, b) //[1,3,4]"

const fn = (a, b) => {

  let result = new Set();

  a.forEach(el => {
    if (b.includes(el)) result.add(el);
  })

  return Array.from(result);
}

console.log(fn(a, b)) //[1,3,4]