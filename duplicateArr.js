// "Добавить такое поведение массиву:
// const a = [1, 2, 3, 4, 5];
// a.duplicate(); //1,2,3,4,5,1,2,3,4,5"

Array.prototype.duplicate = function () {
  return this + ',' + this;
};

// console.log(a.duplicate())