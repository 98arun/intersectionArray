console.log("hello");

function intersect(arr1, arr2) {
  let newArr = new Set(arr2);
  return [...new Set(arr1)].filter((item) => newArr.has(item));
}
arr1 = [1, 3, 5, 2, 4, 6, 6, 6, 7, 9, 33, 66];
arr2 = [2, 5, 7, 1, 2, 4, 6, 9, 77];
console.log(intersect(arr1, arr2));
