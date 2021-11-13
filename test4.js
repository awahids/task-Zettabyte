/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  let newArr = new Array();
  const count = 9;

  for (let j = 1; j <= count; j++) {
    if (numbers.indexOf(j) == -1) {
      newArr.push(j);
    }
  }
  return newArr;
}

console.log(result(numbers));
